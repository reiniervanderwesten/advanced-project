import React from 'react';
import {Heading, Input, Text, NumberInput, NumberInputField} from '@chakra-ui/react';
import { useState } from 'react';

export const NewEvent=()=>{

    const [datum, setDatum]=useState('');
    const [getal, setGetal]=useState('');

    const handleChange=(event)=>{
        setDatum(event.target.value);
    }

    const handleGetal=(event)=>{
        setGetal(event.target.value);
    }

    const datum1=datum.slice(0,10);
    const datum2=datum.slice(11,16);


    

    

    



    
    

    
    

    return (
        <>

            <Heading>New Event</Heading>
            <Input variant={'outline'}  type= 'datetime-local' w={250} m= {2} placeholder="datum experiment" value={datum} onChange={handleChange}></Input>
            <NumberInput>
                <NumberInputField variant={'outline'} placeholder="getal experiment" w={250} m={2} value={getal} onChange={handleGetal}></NumberInputField>
            </NumberInput>

            <Text>{datum}</Text>
            <Text>{datum1}</Text>
            <Text>{datum2}</Text>
            

            
            
            
            
            
        
        
        </>
        
        
        
    )

};