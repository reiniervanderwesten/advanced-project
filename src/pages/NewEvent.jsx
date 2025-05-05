import React from 'react';
import {Heading, Input, Text} from '@chakra-ui/react';
import { useState } from 'react';

export const NewEvent=()=>{

    const [datum, setDatum]=useState('');

    const handleChange=(event)=>{
        setDatum(event.target.value);
    }

    const eerste="1,2,3";

    const array=eerste.split(',');
    console.log(array);
    console.log(array.length);
    const getal=array.shift();
    console.log(getal);
    console.log(typeof(getal));

    
    

    return (
        <>

            <Heading>New Event</Heading>
            <Input variant={'outline'} type='number' w={250} placeholder="datum experiment" value={datum} onChange={handleChange}></Input>
            
            
        
        
        </>
        
        
        
    )

};