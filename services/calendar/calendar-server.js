import cors from "cors";
import "dotenv/config";
import express from "express";
import Nylas from "nylas";

const config = {
  clientId: process.env.NYLAS_CLIENT_ID,
  callbackUri: "http://localhost:8080/oauth/exchange",
  apiKey: process.env.NYLAS_API_KEY,
  apiUri: process.env.NYLAS_API_URI,
};

const nylas = new Nylas({
  apiKey: config.apiKey,
  apiUri: config.apiUri,
});

const app = express();
const port = 8080;

app.use(cors());

// Route to initialize authentication
app.get("/nylas/auth", (req, res) => {
  const authUrl = nylas.auth.urlForOAuth2({
    clientId: config.clientId,
    redirectUri: config.callbackUri,
  });

  console.log("auth: ", authUrl);

  res.redirect(authUrl);
});

// callback route Nylas redirects to
app.get("/oauth/exchange", async (req, res) => {
  console.log("Received callback from Nylas");
  const code = req.query.code;

  console.log("code: ", code);

  if (!code) {
    res.status(400).send("No authorization code returned from Nylas");
    return;
  }

  const codeExchangePayload = {
    clientSecret: config.apiKey,
    clientId: config.clientId,
    redirectUri: config.callbackUri,
    code,
  };

  try {
    const response = await nylas.auth.exchangeCodeForToken(codeExchangePayload);
    const { grantId } = response;

    // NB: This stores in RAM
    // In a real app you would store this in a database, associated with a user
    process.env.NYLAS_GRANT_ID = grantId;

    res.json({ message: "OAuth2 flow completed successfully for grant ID: " + grantId });
  } catch (error) {
    res.status(500).send("Failed to exchange authorization code for token");
  }
});

// Route to fetch primary calendar
app.get("/nylas/primary-calendar", async (req, res) => {
  try {
    const identifier = process.env.NYLAS_GRANT_ID;
    const calendars = await nylas.calendars.find({
      identifier,
      calendarId: "primary",
    });

    const primaryCalendar = calendars.data;

    // NB: This stores in RAM
    // In a real app you would store this in a database, associated with a user
    process.env.PRIMARY_CALENDAR_ID = primaryCalendar.id;

    res.json(primaryCalendar);
  } catch (error) {
    console.error("Error fetching calendar:", error);
  }
});

// Route to list events on a calendar
app.get("/nylas/list-events", async (req, res) => {
  try {
    const identifier = process.env.NYLAS_GRANT_ID;
    const calendarId = process.env.PRIMARY_CALENDAR_ID;

    const events = await nylas.events.list({
      identifier,
      queryParams: {
        calendarId,
        limit: 5,
      },
    });

    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
  }
});

// Route to create an event on a calendar
app.get("/nylas/create-event", async (req, res) => {
  try {
    const identifier = process.env.NYLAS_GRANT_ID;
    const calendarId = process.env.PRIMARY_CALENDAR_ID;

    // Schedule the event to start in 5 minutes and end in 35 minutes
    const now = new Date();
    const startTime = new Date(now.getTime());
    startTime.setMinutes(now.getMinutes() + 5);
    const endTime = new Date(now.getTime());
    endTime.setMinutes(now.getMinutes() + 35);

    const newEvent = await nylas.events.create({
      identifier,
      queryParams: {
        calendarId,
      },
      requestBody: {
        title: "Your event title here",
        when: {
          startTime: Math.floor(startTime.getTime() / 1000),
          endTime: Math.floor(endTime.getTime() / 1000),
        },
      },
    });

    res.json(newEvent);
  } catch (error) {
    console.error("Error creating event:", error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Calendar server is running on port ${port}`);
});
