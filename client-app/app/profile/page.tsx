import { Card, Divider, Tab, TabGroup, TabList, TabPanel, TabPanels, TextInput } from "@tremor/react";

export default async function Profile() {
  // todo: here will come from auth
  const user = {
    name: "Some user",
    age: 24,
    email: "user@some.com",
  };

  const usage = [
    { id: 1, resource: "Requests per day", usage: "145", maximum: "1,000", href: "#" },
    { id: 2, resource: "Storage per month", usage: "1.1", maximum: "10 GB", href: "#" },
    { id: 3, resource: "Members", usage: "10", maximum: "25", href: "#" },
    { id: 4, resource: "Availability", usage: "95.1", maximum: "99.9%", href: "#" },
  ];

  return (
    <div className="m-2 mt-10 h-full p-2">
      <h3 className="text-tremor-title font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Settings
      </h3>
      <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
        Manage your personal details, workspace governance and notifications.
      </p>
      <TabGroup className="mt-6">
        <TabList>
          <Tab>Account details</Tab>
          <Tab>Billing</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="mt-8 space-y-8">
              <form action="#" method="POST">
                <div>
                  <h4 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Email
                  </h4>
                  <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    Update your email address associated with this workspace.
                  </p>
                  <div className="mt-6">
                    <label
                      htmlFor="email"
                      className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                    >
                      Update email address
                    </label>
                    <TextInput
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@company.com"
                      className="mt-2 w-full rounded-tremor-small sm:max-w-lg"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-6 whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
                  >
                    Update email
                  </button>
                </div>
              </form>
              <Divider />
              <form action="#" method="POST">
                <h4 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  Password
                </h4>
                <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                  Update your password associated with this workspace.
                </p>
                <div className="mt-6">
                  <label
                    htmlFor="current-password"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Current password
                  </label>
                  <TextInput
                    type="password"
                    id="current-password"
                    name="current-password"
                    placeholder=""
                    className="mt-2 w-full rounded-tremor-small sm:max-w-lg"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="new-password"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    New password
                  </label>
                  <TextInput
                    type="password"
                    id="new-password"
                    name="new-password"
                    placeholder=""
                    className="mt-2 w-full rounded-tremor-small sm:max-w-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
                >
                  Update password
                </button>
              </form>
            </div>
          </TabPanel>
          <TabPanel>
            <h4 className="mt-8 font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Workspace usage
            </h4>
            <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
              Overview of all activities of your workspace. Learn more about our
              <a
                href="#"
                className="ml-2 inline-flex items-center gap-1 text-tremor-brand hover:underline hover:underline-offset-4 dark:text-dark-tremor-brand"
              >
                upgrade options
              </a>
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:max-w-3xl sm:grid-cols-2">
              {usage.map((item) => (
                <Card
                  key={item.id}
                  className="p-4 hover:bg-tremor-background-muted hover:dark:bg-dark-tremor-background-muted"
                >
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    <a href={item.href} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden={true} />
                      {item.resource}
                    </a>
                  </p>
                  <p className="mt-3 flex items-end">
                    <span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                      {item.usage}
                    </span>
                    <span className="font-semibold text-tremor-content-subtle dark:text-dark-tremor-content-subtle">
                      /{item.maximum}
                    </span>
                  </p>
                </Card>
              ))}
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
