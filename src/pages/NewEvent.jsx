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
    const length= array.length;

    let numberArray=[];

    for(let i=0; i<length; i++){
        numberArray.push(parseInt(array[i]))
    }

    console.log(numberArray);

    
    

    
    

    return (
        <>

            <Heading>New Event</Heading>
            <Input variant={'outline'} type='number' w={250} placeholder="datum experiment" value={datum} onChange={handleChange}></Input>
            
            
            
        
        
        </>
        
        
        
    )

};