import { createClient } from "@/utils/supabase/server";
import AddContactForm from "./add-contact-form";
import ContactsTable from "./contacts-table";

export default async function Contacts() {
  const supabase = createClient();
  const { data: contacts } = await (await supabase).from("contacts").select("*");

  if (!contacts) return <>Loading...</>;

  return (
    <div className="mt-10 h-full p-2 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
        <div>
          <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">Contacts</h3>
          <span className="mr-2">{contacts.length}</span>
          total
        </div>
        <AddContactForm />
      </div>
      <ContactsTable />
    </div>
  );
}
