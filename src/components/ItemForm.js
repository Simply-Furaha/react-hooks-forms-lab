import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState(""); // State for name input
  const [itemCategory, setItemCategory] = useState("Produce"); // State for category input

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem); // Pass new item to parent via callback
    setItemName(""); // Clear the form after submission
    setItemCategory("Produce"); // Reset category to initial value
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)} // Update state on input change
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)} // Update state on select change
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
