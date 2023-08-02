// src/pages/EventPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Додано імпорт useNavigate
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import eventsData from "../data/eventsData";

const EventPage = () => {
  const { eventId } = useParams();
  const event = eventsData.find((event) => event.id === parseInt(eventId));
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Використовуємо хук useNavigate() для повернення на попередню сторінку
    // Після переходу користувач знову потрапить на HomePage
    navigate(-1);
  };

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
      <Button mt="4" colorScheme="teal" onClick={handleGoBack}>
        Повернутися назад
      </Button>
    </Box>
  );
};

export default EventPage;
