import './FormAdding.scss';
import React, { useState } from 'react';

const FormAdding = () => {
  const [title] = useState();
  const [Author] = useState();

  return (
    <form>
      <input type="text" value={title} placeholder="Book title" />
      <input type="text" value={Author} placeholder="Author" />
      <select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </select>
      <button type="submit">Add books</button>
    </form>
  );
};

export default FormAdding;
