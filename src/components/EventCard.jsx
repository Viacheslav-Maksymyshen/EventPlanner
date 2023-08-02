import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const EventCard = ({ event }) => {
  return (
    <Box
      p="4"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      position="relative"
    >
      <Text fontSize="xl" fontWeight="bold" mb="2">
        {event.title}
      </Text>
      <Text>Date: {event.date}</Text>
      <Text>Time: {event.time}</Text>
      {/* Button займає всю площу батьківського Box */}
      <Button
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="1" // Встановлюємо zIndex, щоб кнопка була доступна для кліку
        opacity="0" // Прозорість для того, щоб кнопка була невидимою, але доступною для кліку
      >
        {/* Тут додати Link компонент або виклик функції для переходу на сторінку */}
      </Button>
    </Box>
  );
};

export default EventCard;
