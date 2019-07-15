import React from "react";

const NameInput = ({ name, onChange }) => (
  <div>
    Name: <input type="text" name="name" value={name} onChange={onChange} />
  </div>
);

export default NameInput;
