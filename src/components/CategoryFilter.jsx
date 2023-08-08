import React from "react";
import { Select } from "@chakra-ui/react";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <Select
      width="148px"
      height="56px"
      marginRight="24px"
      boxShadow="2px 4px 9px 0px rgba(166, 141, 174, 0.28)"
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
