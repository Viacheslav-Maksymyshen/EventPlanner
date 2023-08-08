import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Тут надіслати дані форми на сервер або зберегти їх у стані додатку

    console.log(formData);
    await new Promise((resolve) => setTimeout(resolve, 1000)); //  імітація запиту

    setIsSubmitting(false);
    setIsAlertOpen(true);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
    // navigate(`/event/${Math.floor(Math.random() * 100)}`);
    navigate(`/`);
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
      <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
        Створити подію
      </Button>
      <AlertDialog isOpen={isAlertOpen} onClose={closeAlert} isCentered>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Повідомлення</AlertDialogHeader>
          <AlertDialogBody>
            Вибачте, але дана сторінка в розробці.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme="blue" onClick={closeAlert}>
              Закрити
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </form>
  );
};

export default EventForm;
