import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { EventPage, loader as eventPageLoader } from './pages/EventPage';
import { EventsPage, loader as eventsLoader } from './pages/EventsPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './components/Root';
import { NewEvent } from './pages/NewEvent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <EventsPage />,
        loader: eventsLoader,
      },
      {
        path: '/event/:eventId',
        element: <EventPage />,
        loader: eventPageLoader,
        // action: addComment,
      },
      {
        path: '/event/new',
        element: <NewEvent/>
      }
      
    ],
  },
]);

const theme=extendTheme({
  breakpoints: {
    base: '0px',
    sm: '175px',
    md: '300px',
    lg: '766px',
  },

})

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />      
    </ChakraProvider>
  </React.StrictMode>,
);
