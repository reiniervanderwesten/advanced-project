import React from 'react';
import { Heading, Link as ChakraLink, Flex, Box } from '@chakra-ui/react';
import {Link as ReactRouterLink, useLoaderData} from 'react-router-dom';

export const loader=async()=>{
  const users= await fetch("http://localhost:3000/users");
  const events= await fetch("http://localhost:3000/events");
  const categories=await fetch("http://localhost:3000/categories")

  return{users: await users.json(), events: await events.json(), categories: await categories.json()};

};

export const EventsPage = () => {
  const {users, events, categories}= useLoaderData();
  return (
    <>
      <Heading>lists of events</Heading>
    </>
  );
};
