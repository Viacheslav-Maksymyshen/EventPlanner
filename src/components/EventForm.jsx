import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const EventForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут ви можете надіслати дані форми на сервер або зберегти їх у стані додатку
    // Наприклад, можна вивести їх на сторінці події
    console.log(formData);
    navigate(`/event/${Math.floor(Math.random() * 100)}`); // Перенаправити на сторінку події з випадковим ID (додати свій логічний генерацію ID)
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl mb="4">
        <FormLabel>Назва події:</FormLabel>
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Дата:</FormLabel>
        <Input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Час:</FormLabel>
        <Input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Місце:</FormLabel>
        <Input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Опис:</FormLabel>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </FormControl>
      <Button type="submit" colorScheme="blue">
        Створити подію
      </Button>
    </form>
  );
};

export default EventForm;
