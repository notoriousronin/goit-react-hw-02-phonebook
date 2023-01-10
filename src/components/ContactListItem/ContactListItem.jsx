import React from 'react';

export default function ContactListItem({ id, name, number }) {
  return (
    <div>
      <ul key={id}>
        <li>
          {name}: {number}
        </li>
      </ul>
    </div>
  );
}
