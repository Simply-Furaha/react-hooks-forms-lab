import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item"; // Assuming this is your item component
import ItemForm from "./ItemForm"; // Assuming the form is part of this component

function ShoppingList({ items }) {
  const [searchText, setSearchText] = useState("");
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [itemList, setItemList] = useState(items); // Manage the list of items

  // Filter items based on search text and category
  const filteredItems = itemList.filter((item) => {
    return (
      (item.name.toLowerCase().includes(searchText.toLowerCase()) || searchText === "") &&
      (filteredCategory === "All" || item.category === filteredCategory)
    );
  });

  // Function to handle adding new items to the list
  function handleAddItem(newItem) {
    setItemList([...itemList, newItem]); // Use spread operator to add new items
  }

  return (
    <div>
      <Filter
        search={searchText}
        onSearchChange={setSearchText} // Pass state updater function
        onCategoryChange={(e) => setFilteredCategory(e.target.value)} // Handle category change
      />
      <ItemForm onItemFormSubmit={handleAddItem} /> {/* Pass callback to add items */}
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
