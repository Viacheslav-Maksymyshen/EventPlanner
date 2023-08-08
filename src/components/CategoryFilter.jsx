import React from "react";
import { Select } from "@chakra-ui/react";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <Select
      value={selectedCategory}
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </Select>
  );
};

export default CategoryFilter;
