import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Destination from './Destination';
// import flags from './flags';

export default function TreapContainer(props, history){
  
    // const [nameFlag,setNameFlag] = useState('');
    const [nameArea,setNameArea] = useState('');
    
    useEffect(()=> {
        // setNameFlag(
        //     flags.map(element => element.name)
        // );
    })

    

    return(
        <div>
            <Destination
                {...props}
                name={nameArea}
            />
        </div>
    )
}
