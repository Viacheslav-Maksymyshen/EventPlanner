import React from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
import eventsData from "../data/eventsData";

const EventPage = () => {
  const { eventId } = useParams();
  const event = eventsData.find((event) => event.id === parseInt(eventId));

  if (!event) {
    return <Box p="6">Подію не знайдено</Box>;
  }

  return (
    <Box p="6">
      <Heading as="h1" size="xl" mb="4">
        {event.title}
      </Heading>
      <Text>Дата: {event.date}</Text>
      <Text>Час: {event.time}</Text>
      <Text>Місце: {event.location}</Text>
      <Text>Опис: {event.description}</Text>
    </Box>
  );
};

export default EventPage;
