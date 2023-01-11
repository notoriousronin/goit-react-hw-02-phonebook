import React from 'react';
import ContactListItem from 'components/ContactListItem/ContactListItem';

export default function ContactList({ contacts, onDeleteContact }) {
  const blockStyle = {
    display: 'flex',
    marginBottom: '20px',
  };
  const deleteBtnStyle = {
    marginLeft: '15px',
    borderRadius: '5px',
    backgroundColor: 'pink',
    color: 'black',
    fontSize: '14px',
    boxShadow: '0 9px #999',
  };
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <div style={blockStyle} key={id}>
          <ContactListItem name={name} number={number} />
          <button
            style={deleteBtnStyle}
            onClick={() => onDeleteContact(id)}
            type="button"
          >
            Delete Contact
          </button>
        </div>
      ))}
    </ul>
  );
}
