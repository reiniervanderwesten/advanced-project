import React from 'react';
import { Heading, Text, Image, Flex, Box, Button, Stack, Input, NumberInput, NumberInputField, FormControl, FormLabel, useToast} from '@chakra-ui/react';
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
  const toast=useToast();

  const [created,setCreated]= useState('');
  const [titel, setTitel]= useState('');
  const [beschrijving, setBeschrijving]= useState('');
  const [afbeelding, setAfbeelding]=useState('');
  const [category, setCategory]=useState('');
  const [locatie, setlocatie]= useState('');
  const [starttijd, setStarttijd]= useState('');
  const [eindtijd, setEindtijd]= useState('');

  const [createdBy, setCreatedBy]=useState(event.createdBy);
  const [title, setTitle]=useState(event.title);
  const [description, setDescription]= useState(event.description);
  const [image, setImage]=useState(event.image);
  const [categoryIds, setCategoryIds]=useState(event.categoryIds)
  const [startTime, setStartTime]= useState(event.startTime);
  const [endTime, setEndTime]=useState(event.endTime);

  const handleSubmit= (eventt)=>{
    
    eventt.preventDefault();
    const id=event.id;

    const gemaaktDoor=Number(created);
    const categorieID= category.split(',');
    let categorieNummers=[];

    for (let i=0; i<categorieID.length; i++){
      categorieNummers.push(parseInt(categorieID[i]))
    }

    try{
      fetch(`http://localhost:3000/events/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json;charset=utf-8"},
        body: JSON.stringify({
          createdBy:gemaaktDoor,
          title: titel,
          description: beschrijving,
          image: afbeelding,
          categoryIds: categorieNummers,
          location: locatie,
          startTime: starttijd,
          endTime: eindtijd
        
        })

      });

      toast({
        
        title: 'gegevens',
        description: "gegevens succesvol in database",
        position: 'top-left',
        duration: 4000,
        status: 'success'
      })
    } catch(err){
      toast({
        title: 'gegevens',
        description: 'gegevens niet opgenomen in database',
        position: 'top-left',
        duration: 4000,
        status: 'error'
      })
      console.log(err);
    }

    

    setCreatedBy(gemaaktDoor);
    setTitle(titel);
    setDescription(beschrijving);
    setImage(afbeelding);
    setCategoryIds(categorieNummers);
    setStartTime(starttijd);
    setEndTime(eindtijd);

    setCreated("");
    setTitel("");
    setBeschrijving("");
    setAfbeelding("");
    setCategory("");
    setlocatie("");
    setStarttijd("");
    setEindtijd("");
  }

  

  

  const destroyEvent=async(id)=>{
    await fetch(`http://localhost:3000/events/${id}`,{
      method: "DELETE",
      headers: {"Content-Type": "application/json;charset=utf-8"},
    });

    navigate('/');
  };
  
  return (
    <Flex h="fit-content" w="100" flexDir={'column'} mt={2}>
      <Heading m={4}>Events</Heading>      
      
      <Box alignSelf={'center'}>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Image src={image} w={200} h={200} borderRadius={'md'} m={2}></Image>
        <Text>Begin: {startTime.slice(0,10)}, {startTime.slice(11,16)}</Text>
        <Text>Einde: {endTime.slice(0,10)}, {endTime.slice(11,16)}</Text>
        <Text color= {'green.500'}>categories: {categoryIds.join()}</Text>
        <Text>{users.find((user)=>user.id==createdBy).name}</Text>
        <Image src={users.find((user)=>user.id==createdBy).image} w={200} h={200} borderRadius={'md'} m={2}></Image>
        

      </Box>

      <Stack m={4} >
        <form onSubmit={handleSubmit}>
          <NumberInput m={2}>
            <NumberInputField variant={'outline'} placeholder={'number created by'} w={250} value={created} onChange={e=>setCreated(e.target.value)} required="required"/>
          </NumberInput>
          <Input variant={'outline'} type='text' placeholder='title' w={250} value={titel} onChange={e=>setTitel(e.target.value)} required="required" m={2}></Input>
          <Input variant={'outline'} type="text" placeholder={'description'} w={250} value={beschrijving} onChange={e=>setBeschrijving(e.target.value)} required="required" m={2}></Input>
          <Input variant={'outline'} type="url" placeholder={'link to image'} w={250} value={afbeelding} onChange={e=>setAfbeelding(e.target.value)} required="required" m={2}></Input>
          <Input variant={'outline'} type="text" placeholder={'catgories'} w={250} value={category} onChange={e=>setCategory(e.target.value)} required="required" m={2}></Input>
          <Input variant={'outline'} type="text" placeholder={'location'} w={250} value={locatie} onChange={e=>setlocatie(e.target.value)} required="required" m={2}></Input>
          <FormControl>

            <FormLabel>Starttijd</FormLabel>
            <Input variant={'outline'} type={'datetime-local'} w={250} value={starttijd} onChange={e=>setStarttijd(e.target.value)} required="required" m={2}></Input>                   
                            

            
          </FormControl>

          <FormControl>
            <FormLabel>Eindtijd</FormLabel>
            <Input variant={'outline'} type={'datetime-local'} w={250} value={eindtijd} onChange={e=> setEindtijd(e.target.value)} required="required" m={2}></Input>

          </FormControl>
          
          
          <Button margin={4} type="submit">Edit</Button>
        </form>

      </Stack>

      
      
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




