// src/components/EventCard.jsx
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const EventCard = ({ event }) => {
  return (
    <Box
      p="4"
      border="1px solid #ddd"
      borderRadius="md"
      boxShadow="md"
      transition="box-shadow 0.3s"
      _hover={{ boxShadow: "lg" }}
      position="relative"
    >
      <Heading as="h2" size="md" mb="2">
        {event.title}
      </Heading>
      <Text>Date: {event.date}</Text>
      <Text>Time: {event.time}</Text>
      <Text>Location: {event.location}</Text>
      <Text>Description: {event.description}</Text>
    </Box>
  );
};

export default EventCard;
