import { ContactListItem } from "./ContactListItem/ContactListItem";

export function ContactList({ contacts }) {
  console.log(contacts);
  return (
    <ul>
      <ContactListItem data={contacts} />
    </ul>
  );
}
