import React from 'react';

export default function Filter({ value, onChange }) {
  return (
    <div>
      <label>
        Find contact by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
}
