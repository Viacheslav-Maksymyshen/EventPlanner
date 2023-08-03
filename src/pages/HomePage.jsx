// src/pages/HomePage.jsx
import React from "react";
import { Grid, Button } from "@chakra-ui/react";
import EventCard from "../components/EventCard";

import { Link } from "react-router-dom";

const HomePage = ({ events }) => {
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="4">
      {events.map((event) => (
        <EventCardWrapper key={event.id} event={event} />
      ))}
    </Grid>
  );
};

const EventCardWrapper = ({ event }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative" }} // Додаємо властивість для розміщення абсолютно позиціонованої кнопки
    >
      <EventCard event={event} />
      {isHovered && (
        <Link to={`/event/${event.id}`}>
          <Button
            position="absolute"
            bottom="4"
            left="50%"
            transform="translateX(-50%)"
            opacity="0"
            transition="opacity 0.3s"
            _hover={{ opacity: "1" }}
          >
            More info
          </Button>
        </Link>
      )}
    </div>
  );
};

export default HomePage;
