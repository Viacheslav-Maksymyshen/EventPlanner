import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryFilter from "../components/CategoryFilter";
import EventList from "../components/EventCard/EventList";
import { useEventsData } from "../components/EventsDataContext";
import { Button, Flex, Box, Select } from "@chakra-ui/react";

const HomePage = ({ selectedCategory, onSelectCategory, searchQuery }) => {
  const { eventsData } = useEventsData();
  const categories = [...new Set(eventsData.map((event) => event.category))];

  const [sortType, setSortType] = useState("");

  const sortEvents = (events) => {
    if (sortType === "dateAsc") {
      return events.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortType === "dateDesc") {
      return events.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortType === "nameAsc") {
      return events.slice().sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortType === "nameDesc") {
      return events.slice().sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortType === "priorityAsc") {
      return events
        .slice()
        .sort((a, b) => a.priority.localeCompare(b.priority));
    } else if (sortType === "priorityDesc") {
      return events
        .slice()
        .sort((a, b) => b.priority.localeCompare(a.priority));
    }
    return events;
  };

  const filteredEvents = eventsData.filter((event) => {
    const matchesCategory =
      selectedCategory === "" || event.category === selectedCategory;

    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const sortedAndFilteredEvents = sortEvents(filteredEvents);

  const createButtonStyles = {
    display: "flex",
    width: "193px",
    padding: "16px 12px",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    borderRadius: "8px",
    background: "#7B61FF",
    boxShadow: "2px 4px 9px 0px rgba(166, 141, 174, 0.28)",
    color: "#FFF",
    textDecoration: "none",
    height: "56px",
    colorScheme: "blue",
    size: "md",
  };

  return (
    <Box>
      <Flex
        mx="auto"
        maxWidth={{ base: "320px", md: "768px", xl: "1280px" }}
        justifyContent="flex-end"
      >
        <Box>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
          />
        </Box>

        <Box>
          <SortOptions setSortType={setSortType} />
        </Box>
        <Box>
          <Link to="/EventPlanner/create-event">
            <Button
              style={{
                ...createButtonStyles,
              }}
              _hover={{ background: "fFF" }}
            >
              Create Event
            </Button>
          </Link>
        </Box>
      </Flex>
      <EventList events={sortedAndFilteredEvents} />
    </Box>
  );
};

const SortOptions = ({ setSortType }) => {
  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  return (
    <Select
      value=""
      onChange={handleSortChange}
      width="148px"
      height="56px"
      marginRight="24px"
      boxShadow="2px 4px 9px 0px rgba(166, 141, 174, 0.28)"
    >
      <option value="" disabled>
        Sort by
      </option>
      <option value="dateAsc">Date &#9650;</option>
      <option value="dateDesc">Date &#9660;</option>
      <option value="nameAsc">Name &#9650;</option>
      <option value="nameDesc">Name &#9660;</option>
      <option value="priorityAsc">Priority &#9650;</option>
      <option value="priorityDesc">Priority &#9660;</option>
    </Select>
  );
};

export default HomePage;
