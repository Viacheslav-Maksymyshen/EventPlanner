import React, { createContext, useContext, useState } from "react";
import eventsDataX from "../data/eventsData";

const EventsDataContext = createContext();

export const useEventsData = () => {
  return useContext(EventsDataContext);
};

export const EventsDataProvider = ({ children }) => {
  const [eventsData, setEventsData] = useState(eventsDataX);

  const deleteEvent = (eventId) => {
    const updatedEventsData = eventsData.filter(
      (eventItem) => eventItem.id !== eventId
    );
    setEventsData(updatedEventsData);
  };

  return (
    <EventsDataContext.Provider value={{ eventsData, deleteEvent }}>
      {children}
    </EventsDataContext.Provider>
  );
};
