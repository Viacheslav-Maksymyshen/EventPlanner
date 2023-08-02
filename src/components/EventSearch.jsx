import React from "react";
import { Input } from "@chakra-ui/react";

const EventSearch = ({ searchText, onSearchInputChange }) => {
  return (
    <Input
      type="text"
      placeholder="Пошук подій за назвою чи описом"
      value={searchText}
      onChange={onSearchInputChange}
      mb="4"
    />
  );
};

export default EventSearch;
