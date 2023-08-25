import React, { useState } from 'react';
import { Pa } from './Pa';
import { Child } from './child';

export const Linker = (props) => {

    const [updateDiv, setUpdateDiv] = useState([])

    function divs(a, b) {
        setUpdateDiv((prevdata) => {
            return [
                ...prevdata,
                { name: a, age: b, id: Math.random().toString() },
            ];
        });
    }

    return (
        <>
            <Pa diVs={updateDiv} />
            <Child onDiv={divs} />
        </>
    ) 
  
    }
