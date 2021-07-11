import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';

const root = document.getElementById('root');

ReactDOM.render(
    <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
    </ChakraProvider>,
    root
);