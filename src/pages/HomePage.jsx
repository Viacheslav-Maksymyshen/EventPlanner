// src/pages/HomePage.jsx
import React from "react";
import { Box } from "@chakra-ui/react";
import EventList from "../components/EventCard/EventList";

const HomePage = ({ events }) => {
  return (
    <Box>
      <EventList events={events} /> {/* Передаємо пропс events до EventList */}
    </Box>
  );
};

export default HomePage;
