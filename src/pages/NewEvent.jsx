import React from 'react';
import {Heading, Input, Text} from '@chakra-ui/react';
import { useState } from 'react';

export const NewEvent=()=>{

    const [datum, setDatum]=useState('');

    const handleChange=(event)=>{
        setDatum(event.target.value);
    }

    console.log(datum);

    return (
        <>

            <Heading>New Event</Heading>
            <Input variant={'outline'} w={250} placeholder="datum experiment" value={datum} onChange={handleChange}></Input>
        
        
        </>
        
        
        
    )

};