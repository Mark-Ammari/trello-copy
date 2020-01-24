import React, { createContext } from 'react';

const colorContext = createContext({
    color: "",
    changeColor: () => {},
    colorScheme: []
});

export default colorContext;