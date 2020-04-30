//modules
import React, { useState } from 'react';
import flags from './flags';
//import ContainerMeal from './ContainerMeal';

// css
import './Destination.css';

const Destination = (props) => {

    const handleClick = (nameflag) => {
        props.history.push(`/meal/${nameflag}`)
    }

    return(
        <div className="Destination">
            <h1>Find your treap !</h1>
                <div className="ContainerImg">
                    {flags.map((element, index) => 
                        <div onClick={() => handleClick(element.name)}>
                            <img key={index} src={element.img} />
                        </div>
                    )}
                </div>
        </div>
    );
}

export default Destination;