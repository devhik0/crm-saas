"use client";

import { Bold, Card, Grid, List, ListItem, Tab, TabGroup, TabList, Text, Title } from "@tremor/react";
import { useState } from "react";
import { industries, keywords, numEmployees, roles } from "./report-data";

export default function Reports() {
  const Categories = {
    Interested: "interested",
    Open: "open",
    Reply: "reply",
  };

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
