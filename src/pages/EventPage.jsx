import React from 'react';
import { Heading, Text, Image, Flex, Box } from '@chakra-ui/react';
import {Link as ReactRouterLink, useLoaderData, useNavigate} from 'react-router-dom';
import { useState } from 'react';

export const loader=async({params})=>{
  const users=await fetch("http://localhost:3000/users");
  const event= await fetch(`http://localhost:3000/events/${params.eventId}`);

  return {users: await users.json(), event: await event.json()};
};

export const EventPage = () => {
  const {users, event}=useLoaderData();
  console.log(typeof(event.startTime));
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
      

    </Flex>

  )
};
