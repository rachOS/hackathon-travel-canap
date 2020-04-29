//modules
import React, { useState } from 'react';
import flags from './flags';
import ContainerMeal from './ContainerMeal';

// css
import './Destination.css';

const Destination = (props) => {
    const [ countryMeal, setCountryMeal ] = useState('');

    const handleClick = (nameflag) => {

        props.history.push(`/meal/${nameflag}`)
        // setCountryMeal(props.mealRandom.strArea === flags.map(element => element.name
        // ));
        // console.log(countryMeal);
        


        // return <ContainerMeal
        //             // mealRandom={props.mealRandom}
        //             changeMeal={props.changeMeal}
        //         />

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