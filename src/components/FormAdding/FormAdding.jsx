import './FormAdding.scss';
import React, { useState } from 'react';

const FormAdding = () => {
  const [title] = useState();
  const [Author] = useState();

  return (
    <section className="form-section">
      <form className="form-Container">
        <input className="Input-title" type="text" value={title} placeholder="Book title" />
        <input className="Input-Author" type="text" value={Author} placeholder="Author" />
        <select className="CategorysMenu">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
        </select>
        <button className="addBooksBtn" type="submit">Add books</button>
      </form>
    </section>
  );
};

export default FormAdding;
