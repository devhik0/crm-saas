import { Card } from "@tremor/react";

export default async function Profile() {
  // todo: here will come from auth
  const user = {
    name: "Some user",
    age: 24,
    email: "user@some.com",
  };

  return (
    <div className="m-2 mt-10 h-full p-2">
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
