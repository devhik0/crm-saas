import Link from "next/link";

export default function Sidebar() {
  const routes = [
    { page: "Dashboard", link: "/dashboard" },
    { page: "Calendar", link: "/calendar" },
    { page: "Profile", link: "/profile" },
    { page: "Reports", link: "/reports" },
    { page: "Charts", link: "/charts" },
    { page: "Tasks", link: "/tasks" },
    { page: "Mails", link: "/mails" },
    { page: "Chat", link: "/chat" },
    { page: "Contacts", link: "/contacts" },
    { page: "Storage", link: "/storage" },
  ];

  return (
    <div className="w-[15%] bg-gray-900 text-gray-300">
      {routes.map((item, idx) => (
        <div key={idx} className="m-2 rounded-lg bg-[#212b40] p-2 text-center text-gray-300">
          <Link href={item.link}>{item.page}</Link>
        </div>
      ))}
    </div>
  );
}
