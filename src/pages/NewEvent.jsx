import React from 'react';
import {Heading, Input, NumberInput, NumberInputField, Button, Stack} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const NewEvent=()=>{
    const [created, setCreated]=useState('');
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [image, setImage]=useState('');
    const [category, setCategory]=useState('');
    const [location, setLocation]=useState('');
    const [startTime, setStartTime]=useState('');
    const [endTime, setEndTime]=useState(''); 
    
    
    
    
        
    

    


    const navigate= useNavigate();

    const createEvent= async eventt=>{
        const response= await fetch("http://localhost:3000/events",{
            method: "POST",
            body: JSON.stringify(eventt),
            headers: {"Content-Type": "application/json;charset=utf-8"},
        });

        eventt.id= (await response.json()).id;
    };

    const handleSubmit=event=>{
        event.preventDefault();

        const createdBy= Number(created);
        const categorieId=category.split(',');
              
        
        let categoryIds=[];

        for(let i=0; i<categorieId.length; i++){
            categoryIds.push(parseInt(categorieId[i]))
        }

        createEvent({createdBy, title, description, image, categoryIds, location, startTime, endTime});
        setCreated("");
        setTitle("");
        setDescription("");
        setImage("");
        setCategory("");
        setLocation("");
        setStartTime("");
        setEndTime("");

        navigate('/');

        

    
    

    };

    

    
    
    

    return (
        <Stack padding={3} flexDirection={'column'}>
            <Heading>New Event</Heading>

            <form onSubmit={handleSubmit}>
                <NumberInput>
                    <NumberInputField variant={'outline'} placeholder={'number created by'} w= {250} value={created} onChange={e=>setCreated(e.target.value)} required="required"/>
                </NumberInput>

                <Input display= {'inline-block'} tpe= "text" variant={'outline'} type="text" placeholder={'title'} w={250} value={title} onChange={e=>setTitle(e.target.value)} required="required"></Input>

                <Input variant={'outline'} type="text" placeholder={'description'} w={250} value={description} onChange={e=>setDescription(e.target.value)} required="required"></Input>

                <Input variant={'outline'} type='url' placeholder={'link to image'} w={250} value={image} onChange={e=>setImage(e.target.value)} required="required"></Input>

                <Input variant={'outline'} type='text' placeholder={'belongs to category(ies)'} w={250} value={category} onChange={e=>setCategory(e.target.value)} required="required"></Input>

                <Input variant={'outline'} type='text' placeholder={'location'} w={250} value={location} onChange={e=>setLocation(e.target.value)} required="required"></Input>

                <Input variant={'outline'} type={'datetime-local'}  w={250} value={startTime} onChange={e=>setStartTime(e.target.value)} required="required"></Input>

                <Input variant={'outline'} type={'datetime-local'} w={250} value={endTime} onChange={e=>setEndTime(e.target.value)} required="required"></Input>
                <Button margin={4} type="submit">Add Event</Button>
            </form>
        </Stack>
        
        
        
        
    )

};