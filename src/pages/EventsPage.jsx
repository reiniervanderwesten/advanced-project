import React from 'react';
import { Heading, Link as ChakraLink, Flex, Box, Input, Text, Image } from '@chakra-ui/react';
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
  const [searchTitle, setSearchTitle]=useState('');

  let resultaten='';

  

  const resultaat= events.find(({title})=> title===searchTitle)
  if (resultaat){
    resultaten= `Naam: ${resultaat.title}, number: ${resultaat.id}`
  }

  else{
    resultaten="no event found"
  }

  console.log(resultaten);

  const handleNaam=(event)=>{
    setSearchTitle(event.target.value);
  }
  
  

  let matchedEvents='';

  if (searchField==''){
    matchedEvents=events
  }

  else{
    matchedEvents=events.filter((event)=>{
      return event.categoryIds.includes(Number(searchField))
    });
  

  }

  const handleChange=(event)=>{
    setSearchField(event.target.value);
  };

  const Datum=Date.parse("2023-03-10T18:00:00.000Z");
  return (
    <Flex h='fit-content' w='100%' flexDir= {'column'} mb={2}>
      <Heading m={4}>lists of events</Heading>
      <Input variant= {'outline'} w={250} m={4} placeholder={"search on title"} onChange={handleNaam}></Input>
      <Text m={4}>{resultaten}</Text>
      <Input variant={'outline'} w={250} m={4} alignSelf={'center'} placeholder="filter on category" onChange={handleChange} ></Input>
      <Flex gap={4} ml={4} width={'100%'} flexDir={'column'} flexWrap={'wrap'} alignContent={'flex-start'}>
        {matchedEvents.map((event)=>(
          <Box key={event.id} padding={3} w={250} borderWidth='2px' borderColor={'red.200'}>
            <ChakraLink as={ReactRouterLink} to= {`event/${event.id}`}>{event.title}</ChakraLink>
            <Text>{event.description}</Text>
            <Image src={event.image} w={100} h={100} borderRadius={'md'} padding={2}></Image>
            <Text>{event.startTime.slice(0,10)}</Text>
            

          </Box>

        ))}
      </Flex>
    </Flex>
  );
};
