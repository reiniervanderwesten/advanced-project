import React from 'react';
import {Heading, Input, Text, NumberInput, NumberInputField, Button} from '@chakra-ui/react';
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

    


    

    

    



    
    

    
    

    return (
        <>

            <Heading>New Event</Heading>
            
            
            

            
            
            
            
            
        
        
        </>
        
        
        
    )

};