import React from 'react';
import { Link as ReactRouterLink} from 'react-router-dom';
import {Link as ChakraLink} from '@chakra-ui/react';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <ChakraLink  m={4} color= 'red' as={ReactRouterLink}  to="/">Events</ChakraLink>
        </li>
        
        <li>
          <ChakraLink m={4} color= 'red'as={ReactRouterLink} to="/event/new">New Event</ChakraLink>
        </li>
      </ul>
    </nav>
  );
};
