import { Card } from "@tremor/react";
import { kv } from "@vercel/kv";

export default async function Profile() {
  // Acts like user comes from anywhere
  await kv.hset("user", {
    name: "Some Name",
    age: 24,
    email: "a@b.c",
  });
  // Reads value from cache
  const user = await kv.hgetall("user");
  console.log("User: ", user);

  return (
    <div className="m-2 h-full p-2">
      <Card>
        <h3>Profile</h3>
        <p>
          Profile info for User <br />
          {user.name} {user.age} {user.email}
        </p>
      </Card>
    </div>
  );
}
