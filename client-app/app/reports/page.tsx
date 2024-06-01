"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Categories, industries, keywords, numEmployees, roles } from "./report-data";

export default function Reports() {
  const categoriesList = Object.values(Categories);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCategory = categoriesList[selectedIndex];

  return (
    <Card className="mt-10 h-full">
      <CardTitle>Most Engaged Audience</CardTitle>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>Make changes to your account here. Click save when you re done.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password here. After saving, you ll be logged out.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <div className="gap-x-8 gap-y-2">
        <div>
          <h3 className="mt-8">Roles</h3>
          <ul className="mt-2">
            {roles.map((item) => (
              <li key={item.name}>
                <p>{item.name}</p>
                <p>
                  <b>{item.data[selectedCategory].amount}</b> {`(${item.data[selectedCategory].share})`}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mt-8">Industry</h3>
          <ul className="mt-2">
            {industries.map((item) => (
              <li key={item.name}>
                <p>{item.name}</p>
                <p>
                  <b>{item.data[selectedCategory].amount}</b> {`(${item.data[selectedCategory].share})`}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mt-8">Number of Employees</h3>
          <ul className="mt-2">
            {numEmployees.map((item) => (
              <li key={item.name}>
                <p>{item.name}</p>
                <p>
                  <b>{item.data[selectedCategory].amount}</b> {`(${item.data[selectedCategory].share})`}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mt-8">Keywords</h3>
          <ul className="mt-2">
            {keywords.map((item) => (
              <li key={item.name}>
                <p>{item.name}</p>
                <p>
                  <b>{item.data[selectedCategory].amount}</b> {`(${item.data[selectedCategory].share})`}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
