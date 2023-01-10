import React from 'react';
import ContactListItem from 'components/ContactListItem/ContactListItem';

export default function ContactList({ contacts }) {
  return (
    <div>
      {contacts.map(({ name, number, id }) => (
        <ContactListItem key={id} name={name} number={number} />
      ))}
    </div>
  );
}
