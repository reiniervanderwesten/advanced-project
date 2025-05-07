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

    

    

    console.log(getal);
    console.log(typeof(getal));

    const getalteken=typeof(getal);
    const echtgetal=Number(getal);
    const realnumber=typeof(echtgetal)



    
    

    
    

    return (
        <>

            <Heading>New Event</Heading>
            <Input variant={'outline'}  type= 'url' w={250} m= {2} placeholder="datum experiment" value={datum} onChange={handleChange}></Input>
            <NumberInput>
                <NumberInputField variant={'outline'} placeholder="getal experiment" w={250} m={2} value={getal} onChange={handleGetal}></NumberInputField>
            </NumberInput>

            <Text>{getalteken}</Text>
            <Text>{realnumber}</Text>
            
            
            
        
        
        </>
        
        
        
    )

};