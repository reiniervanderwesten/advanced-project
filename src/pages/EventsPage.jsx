import React from 'react';
import { Heading, Link as ChakraLink, Flex, Box, Input, Text } from '@chakra-ui/react';
import {Link as ReactRouterLink, useLoaderData} from 'react-router-dom';
import { useState } from 'react';

export const loader=async()=>{
  const users= await fetch("http://localhost:3000/users");
  const events= await fetch("http://localhost:3000/events");
  const categories=await fetch("http://localhost:3000/categories")

  return{users: await users.json(), events: await events.json(), categories: await categories.json()};

};

export const EventsPage = () => {
  const {users, events, categories}= useLoaderData();
  const [searchField, setSearchField]=useState('');

  const matchedEvents=events.filter((event)=>{
    return event.title.toLowerCase().includes(searchField.toLowerCase())
  });

  const handleChange=(event)=>{
    setSearchField(event.target.value);
  };
  return (
    <Flex h='fit-content' w='100%' flexDir= {'column'} mb={2}>
      <Heading>lists of events</Heading>
      <Input variant={'outline'} w={250} m={4} alignSelf={'center'} placeholder="search on name" onChange={handleChange} ></Input>
      <Flex gap={4} ml={4} flexDir={'column'} flexWrap={'wrap'} alignContent={'flex-start'}>
        {matchedEvents.map((event)=>(
          <Box key={event.id} padding={3} w={250} borderWidth='2px' borderColor={'blackAlpha.200'}>
            <Text>{event.title}</Text>
            <Text>{event.description}</Text>

          </Box>

        ))}
      </Flex>
    </Flex>
  );
};
