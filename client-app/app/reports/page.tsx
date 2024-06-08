"use client";

import { Bold, Card, Grid, List, ListItem, Tab, TabGroup, TabList, Text, Title } from "@tremor/react";
import { useState } from "react";

export default function Reports() {
  const Categories = {
    Interested: "interested",
    Open: "open",
    Reply: "reply",
  };

  const roles = [
    {
      name: "Front-End Developer",
      data: {
        [Categories.Interested]: {
          amount: "3,555",
          share: "37.2%",
        },
        [Categories.Open]: {
          amount: "2,176",
          share: "17.6%",
        },
        [Categories.Reply]: {
          amount: "1,555",
          share: "9.1%",
        },
      },
    },
    {
      name: "Product Designer",
      data: {
        [Categories.Interested]: {
          amount: "1,280",
          share: "19.8%",
        },
        [Categories.Open]: {
          amount: "1,499",
          share: "14.7%",
        },
        [Categories.Reply]: {
          amount: "508",
          share: "9.8%",
        },
      },
    },
    {
      name: "Technical UX-Engineer",
      data: {
        [Categories.Interested]: {
          amount: "1,777",
          share: "15.8%",
        },
        [Categories.Open]: {
          amount: "1,523",
          share: "14.2%",
        },
        [Categories.Reply]: {
          amount: "1,432",
          share: "9.8%",
        },
      },
    },
    {
      name: "Product Manager",
      data: {
        [Categories.Interested]: {
          amount: "789",
          share: "12%",
        },
        [Categories.Open]: {
          amount: "589",
          share: "10.2%",
        },
        [Categories.Reply]: {
          amount: "345",
          share: "8.9%",
        },
      },
    },
  ];

  const industries = [
    {
      name: "Internet",
      data: {
        [Categories.Interested]: {
          amount: "1,365",
          share: "39%",
        },
        [Categories.Open]: {
          amount: "1,245",
          share: "31.2%",
        },
        [Categories.Reply]: {
          amount: "965",
          share: "29%",
        },
      },
    },
    {
      name: "Healthcare",
      data: {
        [Categories.Interested]: {
          amount: "984",
          share: "20.1%",
        },
        [Categories.Open]: {
          amount: "765",
          share: "19.2%",
        },
        [Categories.Reply]: {
          amount: "654",
          share: "18.3%",
        },
      },
    },
    {
      name: "Automotive",
      data: {
        [Categories.Interested]: {
          amount: "789",
          share: "11.4%",
        },
        [Categories.Open]: {
          amount: "637",
          share: "10.5%",
        },
        [Categories.Reply]: {
          amount: "537",
          share: "10.4%",
        },
      },
    },
    {
      name: "Education",
      data: {
        [Categories.Interested]: {
          amount: "789",
          share: "10.1%",
        },
        [Categories.Open]: {
          amount: "534",
          share: "9.5%",
        },
        [Categories.Reply]: {
          amount: "432",
          share: "3.4%",
        },
      },
    },
  ];

  const numEmployees = [
    {
      name: "11 - 50",
      data: {
        [Categories.Interested]: {
          amount: "1,650",
          share: "37.1%",
        },
        [Categories.Open]: {
          amount: "1,465",
          share: "33.2%",
        },
        [Categories.Reply]: {
          amount: "750",
          share: "12.4%",
        },
      },
    },
    {
      name: "50 - 100",
      data: {
        [Categories.Interested]: {
          amount: "320",
          share: "21.2%",
        },
        [Categories.Open]: {
          amount: "290",
          share: "19.2%",
        },
        [Categories.Reply]: {
          amount: "270",
          share: "10.2%",
        },
      },
    },
    {
      name: "100 - 200",
      data: {
        [Categories.Interested]: {
          amount: "107",
          share: "18.1%",
        },
        [Categories.Open]: {
          amount: "90",
          share: "10.1%",
        },
        [Categories.Reply]: {
          amount: "83",
          share: "9.7%",
        },
      },
    },
    {
      name: "250 - 500",
      data: {
        [Categories.Interested]: {
          amount: "93",
          share: "12.1%",
        },
        [Categories.Open]: {
          amount: "87",
          share: "9.8%",
        },
        [Categories.Reply]: {
          amount: "79",
          share: "7.2%",
        },
      },
    },
  ];

  const keywords = [
    {
      name: "Dashboard",
      data: {
        [Categories.Interested]: {
          amount: "37",
          share: "12.1%",
        },
        [Categories.Open]: {
          amount: "23",
          share: "9.6%",
        },
        [Categories.Reply]: {
          amount: "21",
          share: "8.1%",
        },
      },
    },
    {
      name: "React Library",
      data: {
        [Categories.Interested]: {
          amount: "28",
          share: "15.1%",
        },
        [Categories.Open]: {
          amount: "12",
          share: "7.1%",
        },
        [Categories.Reply]: {
          amount: "10",
          share: "7.0%",
        },
      },
    },
    {
      name: "Custom Web Dev",
      data: {
        [Categories.Interested]: {
          amount: "20",
          share: "9.8%",
        },
        [Categories.Open]: {
          amount: "18",
          share: "9.4%",
        },
        [Categories.Reply]: {
          amount: "16",
          share: "8.9%",
        },
      },
    },
    {
      name: "Web Applications",
      data: {
        [Categories.Interested]: {
          amount: "15",
          share: "6.2%",
        },
        [Categories.Open]: {
          amount: "9",
          share: "4.3%",
        },
        [Categories.Reply]: {
          amount: "7",
          share: "3.9%",
        },
      },
    },
  ];

  const categoriesList = Object.values(Categories);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCategory = categoriesList[selectedIndex];

  return (
    <Card className="mt-10 h-full">
      <Title>Most Engaged Audience</Title>
      <TabGroup className="mt-10" index={selectedIndex} onIndexChange={setSelectedIndex}>
        <TabList variant="line">
          <Tab>Interested Rate</Tab>
          <Tab>Open Rate</Tab>
          <Tab>Reply Rate</Tab>
        </TabList>
      </TabGroup>
      <Grid numItemsMd={2} className="gap-x-8 gap-y-2">
        <div>
          <Title className="mt-8">Roles</Title>
          <List className="mt-2">
            {roles.map((item) => (
              <ListItem key={item.name}>
                <Text>{item.name}</Text>
                <Text>
                  <Bold>{item.data[selectedCategory].amount}</Bold> {`(${item.data[selectedCategory].share})`}
                </Text>
              </ListItem>
            ))}
          </List>
        </div>
        <div>
          <Title className="mt-8">Industry</Title>
          <List className="mt-2">
            {industries.map((item) => (
              <ListItem key={item.name}>
                <Text>{item.name}</Text>
                <Text>
                  <Bold>{item.data[selectedCategory].amount}</Bold> {`(${item.data[selectedCategory].share})`}
                </Text>
              </ListItem>
            ))}
          </List>
        </div>
        <div>
          <Title className="mt-8">Number of Employees</Title>
          <List className="mt-2">
            {numEmployees.map((item) => (
              <ListItem key={item.name}>
                <Text>{item.name}</Text>
                <Text>
                  <Bold>{item.data[selectedCategory].amount}</Bold> {`(${item.data[selectedCategory].share})`}
                </Text>
              </ListItem>
            ))}
          </List>
        </div>
        <div>
          <Title className="mt-8">Keywords</Title>
          <List className="mt-2">
            {keywords.map((item) => (
              <ListItem key={item.name}>
                <Text>{item.name}</Text>
                <Text>
                  <Bold>{item.data[selectedCategory].amount}</Bold> {`(${item.data[selectedCategory].share})`}
                </Text>
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
    </Card>
  );
}
