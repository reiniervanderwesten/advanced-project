import React from 'react';
import { Heading, Text, Image, Flex, Box, Button } from '@chakra-ui/react';
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure} from '@chakra-ui/react'
import {Link as ReactRouterLink, useLoaderData, useNavigate} from 'react-router-dom';
import { useState } from 'react';

export const loader=async({params})=>{
  const users=await fetch("http://localhost:3000/users");
  const event= await fetch(`http://localhost:3000/events/${params.eventId}`);

  return {users: await users.json(), event: await event.json()};
};

export const EventPage = () => {
  const {users, event}=useLoaderData();
  const navigate=useNavigate();
  const {isOpen, onOpen, onClose}=useDisclosure();

  const [created,setCreated]= useState('');
  const [titel, setTitel]= useState('');
  const [beschrijving, setBeschrijving]= useState('');
  const [afbeelding, setAfbeelding]=useState('');
  const [category, setCategory]=useState('');
  const [locatie, setlocatie]= useState('');
  const [startijd, setStarttijd]= useState('');
  const [eindtjd, setEindtijd]= useState('');

  

  const destroyEvent=async(id)=>{
    await fetch(`http://localhost:3000/events/${id}`,{
      method: "DELETE",
      headers: {"Content-Type": "application/json;charset=utf-8"},
    });

    navigate('/');
  };
  
  return (
    <Flex h="fit-content" w="100" flexDir={'column'} mt={2}>
      <Heading m={4}>Event</Heading>
      <Box alignSelf={'center'}>
        <Text>{event.title}</Text>
        <Text>{event.description}</Text>
        <Image src={event.image} w={200} h={200} borderRadius={'md'} m={2}></Image>
        <Text>Begin: {event.startTime.slice(0,10)}, {event.startTime.slice(11,16)}</Text>
        <Text>Einde: {event.endTime.slice(0,10)}, {event.endTime.slice(11,16)}</Text>
        <Text color= {'green.500'}>categories: {event.categoryIds.join()}</Text>
        <Text>{users.find((user)=>user.id==event.createdBy).name}</Text>
        <Image src={users.find((user)=>user.id==event.createdBy).image} w={200} h={200} borderRadius={'md'} m={2}></Image>
        

      </Box>
      
      <Button onClick={onOpen} w={'fit-content'} m={4}>Delete?</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm your Delete</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Delete </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={4} onClick={()=>destroyEvent(event.id)}>
              Confirm
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      

    </Flex>

  )
};
