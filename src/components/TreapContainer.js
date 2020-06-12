import React from 'react';
import Destination from './Destination';

export default function TreapContainer(props, history){
    return(
        <div>
            <Destination
                {...props}
            />
        </div>
    )
}
