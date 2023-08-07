import React from "react";
import { List } from "@chakra-ui/react";
import EventListItem from "./EventListItem";

const EventList = ({ events }) => {
  return (
    <List
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(272px, 1fr))"
      gap="40px 24px"
      mt="4"
      mx="auto"
      maxWidth={{ base: "320px", md: "768px", xl: "1280px" }}
    >
      {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </List>
  );
};

export default EventList;
