import React from 'react';
import { Heading, Text, Image, Flex } from '@chakra-ui/react';
import {Link as ReactRouterLink, useLoaderData, useNavigate} from 'react-router-dom';
import { useState } from 'react';

export const loader=async({params})=>{
  const users=await fetch(`http://localhost:3000/users`);
  const event= await fetch(`http://localhost:3000/events/${params.eventId}`);

  return {users: await users.json(), event: await event.json()};
};

export const EventPage = () => {
  return (
    <Flex h="fit-content" w="100" flexDir={'column'} mt={2}>
      <Heading m={4}>Event</Heading>

    </Flex>

  )
};
