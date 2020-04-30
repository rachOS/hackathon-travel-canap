import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
