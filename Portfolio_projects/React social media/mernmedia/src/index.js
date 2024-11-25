import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';



const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<React.StrictMode> <MantineProvider ><App /></MantineProvider></React.StrictMode>,document.getElementById("root"));


