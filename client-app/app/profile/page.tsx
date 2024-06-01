import AccountSettings from "./account-setting";

export default async function Profile() {
  // todo: here will come from auth
  // const user = {
  //   name: "Some user",
  //   age: 24,
  //   email: "user@some.com",
  // };

  return (
    <div className="m-2 mt-10 h-full p-2">
      <h3>Settings</h3>
      <p>Manage your personal details, workspace governance and notifications.</p>
      <AccountSettings />
    </div>
  );
}
