import React from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  return (
    <div className="Filter">
      {/* Controlled input for search */}
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)} // Update state on input change
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
