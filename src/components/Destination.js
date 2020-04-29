//modules
import React from 'react';
import flags from './flags';

// css
import './Destination.css';

const Destination = () => {

    const handleClick = () => {
        // <ContainerMeal />
    }

    return(
        <div className="Destination">
            <h1>Find your treap !</h1>
            <div onClick={() => handleClick()} className="ContainerImg">
                {flags.map((element, index) => 
                    <img key={index} src={element.img} />
                )}
            </div>
        </div>
    );
}

export default Destination;