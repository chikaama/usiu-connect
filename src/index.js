import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RSVPProvider } from './context/RSVPContext';
import { EventsProvider } from './context/EventsContext';
import { UserProvider } from './context/UserContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
  root.render(
  <React.StrictMode>
    <UserProvider>
      <EventsProvider>
        <RSVPProvider>
          <App />
        </RSVPProvider>
      </EventsProvider>
    </UserProvider>
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

