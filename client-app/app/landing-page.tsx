import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BellAlertIcon, ChatBubbleOvalLeftEllipsisIcon, ListBulletIcon } from "@heroicons/react/24/outline";

export default function LandingPage() {
  return (
    <div className="mt-2 flex size-full flex-col items-center justify-center gap-8 p-4">
      <div className="text-center text-6xl">
        Welcome to <br />
        <span className="bg-gradient-to-r from-sky-800 via-sky-500 to-sky-300 bg-clip-text pt-4 text-transparent">
          Customer Nexus
        </span>
      </div>
      <h3 className="text-2xl">
        <Button className="bg-blue-600 p-6 text-lg">Login</Button> to see your daily workflow
      </h3>
      <p className="text-xl">
        Dont have account ? <Button className="bg-blue-600 p-6 text-lg">Signup</Button>
      </p>
      <div className="w-8/12 text-justify">
        <p className="text-xl">
          CustomerNexus is an innovative CRM (Customer Relationship Management) software. <br />
          Designed to
          <span className=" bg-gradient-to-l from-sky-800 via-sky-500 to-sky-300 bg-clip-text p-4 text-transparent">
            streamline your business operations
          </span>
          and
          <span className="bg-gradient-to-l from-sky-800 via-sky-500 to-sky-300 bg-clip-text p-4 text-transparent">
            create stronger connections with your clients.
          </span>
          Enables you to
          <span className="bg-gradient-to-l from-sky-800 via-sky-500 to-sky-300 bg-clip-text p-4 text-transparent">
            manage and analyze customer interactions,
          </span>
          <span className="bg-gradient-to-l from-sky-800 via-sky-500 to-sky-300 bg-clip-text p-4 text-transparent">
            track sales opportunities,
          </span>
          and <span className="text-red-600">optimize your marketing strategies</span> all in{" "}
          <span className="text-emerald-600">one centralized platform.</span>
        </p>
      </div>
      <div className="size-full">
        <h3 className="text-center text-xl">Features</h3>
        <div className="flex flex-row items-center justify-center gap-6 p-4">
          {[
            { text: "Task board for your tasks", icon: <ListBulletIcon className="size-16" /> },
            {
              text: "Notifications to make you ready for any event",
              icon: <BellAlertIcon className="size-20" />,
            },
            {
              text: "Help desk to answer your customers's questions quickly",
              icon: <ChatBubbleOvalLeftEllipsisIcon className="size-20" />,
            },
          ].map((item, idx) => {
            return (
              <Card
                key={idx}
                className="mx-auto flex size-full h-[200px] w-1/3 flex-col items-center justify-center gap-2 border-gray-800 p-4 transition duration-300 ease-in hover:border-2 hover:border-sky-500"
              >
                {item.icon}
                <p className="text-slate-400 transition duration-500 ease-in hover:bg-gradient-to-r hover:from-sky-800 hover:via-sky-500 hover:to-sky-300 hover:bg-clip-text hover:text-transparent">
                  {item.text}
                </p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* <Login
              // login={login}
              /> */}
    </div>
  );
}
