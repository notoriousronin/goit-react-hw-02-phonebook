import React from 'react';

export default function ContactListItem({ name, number }) {
  return (
    <li>
      {name}: {number}
    </li>
  );
}
