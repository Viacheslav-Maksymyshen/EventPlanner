import React, { useState } from "react";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import CategoryFilter from "../components/CategoryFilter";
import EventList from "../components/EventCard/EventList";
import { useEventsData } from "../components/EventsDataContext";

const HomePage = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onSearchClear,
}) => {
  const { eventsData } = useEventsData();
  const categories = [...new Set(eventsData.map((event) => event.category))];
  const [sortField, setSortField] = useState("date");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSortChange = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedEvents = eventsData.slice().sort((a, b) => {
    if (sortField === "title") {
      const compareResult = a.title.localeCompare(b.title);
      return sortDirection === "asc" ? compareResult : -compareResult;
    }
    if (sortField === "priority") {
      const priorityValues = { Low: 1, Medium: 2, High: 3 };
      return sortDirection === "asc"
        ? priorityValues[a.priority] - priorityValues[b.priority]
        : priorityValues[b.priority] - priorityValues[a.priority];
    }
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
  });

  return (
    <Box>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      <Box my="2" display="flex" alignItems="center" justifyContent="flex-end">
        <Menu>
          <MenuButton as={IconButton} icon={<ChevronDownIcon />} size="sm">
            Sort by:
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleSortChange("date")}>
              Date{" "}
              {sortField === "date" && sortDirection === "asc" ? (
                <ChevronUpIcon />
              ) : (
                <ChevronDownIcon />
              )}
            </MenuItem>
            <MenuItem onClick={() => handleSortChange("title")}>
              Title{" "}
              {sortField === "title" && sortDirection === "asc" ? (
                <ChevronUpIcon />
              ) : (
                <ChevronDownIcon />
              )}
            </MenuItem>
            <MenuItem onClick={() => handleSortChange("priority")}>
              Priority{" "}
              {sortField === "priority" && sortDirection === "asc" ? (
                <ChevronUpIcon />
              ) : (
                <ChevronDownIcon />
              )}
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <EventList events={sortedEvents} />
    </Box>
  );
};

export default HomePage;
