import { Card } from "@tremor/react";
import { kv } from "@vercel/kv";

export default async function Profile() {
  await kv.set("data", "some data", { ex: 100, nx: true }); // key-value set

  const data = await kv.get("data"); // key-value get

  console.log("Data: ", data);

  // Acts like user comes from anywhere
  await kv.hset("user", {
    // hash set
    name: "Some Name",
    age: 24,
    email: "a@b.c",
  });
  // Reads value from cache
  const user = (await kv.hgetall("user")) as { name: string; age: number; email: string }; // hash getAll
  console.log("User: ", user);

  console.log("User name: ", await kv.hget("user", "name")); // hash get one

  await kv.lpush("allowedIPs1", "123.345.23.23", "123.343.24.23"); // list push,pop,range...

  const IPs = await kv.lrange("allowedIPs1", 0, -1); // return list from range [0, -1]: full list

  await kv.sadd("emails", "a@b.c", "c@d.e"); // set add

  const isMember = await kv.sismember("emails", "a@b.c"); // set ismember
  // returns 1 if the member is part of the set and 0 if not
  console.log("Is member: ", isMember);

  console.log("IPs: ", IPs);

  await kv.zadd(
    // sorted set
    "mysortedset",
    { score: 1, member: "team1" },
    { score: 2, member: "team2" }
  );

  console.log("Scores: ", await kv.zrange("mysortedset", 0, -1)); // return set from range [0, -1]: full set

  await kv.setbit("mybit", 3, 1); // set bit

  console.log("Bits: ", await kv.getbit("mybit", 3));

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
