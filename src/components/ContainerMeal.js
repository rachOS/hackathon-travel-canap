import React, {useState, useEffect} from 'react';
// import load from '../img/load.png';
// import loadHover from '../img/loadhover.png';
import './ContainerMeal.css';
import axios from 'axios';
import flags from './flags';


const ContainerMeal = (props) => {
    const [mealRandom,setMeals] = useState([]);
    const [load, setLoad] = useState(require("../img/load.png"));

    const handleMouseOver = () => setLoad(require("../img/loadhover.png"));
    const handleMouseOut = () => setLoad(require("../img/load.png"));
    
    useEffect(()=> {
        changeMeal();
    }, [props]);
    
    const changeMeal = () => {
        const nameflag = props.match.params.nameflag;
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nameflag}`)
        .then(res => setMeals(res.data.meals[Math.floor(Math.random()* res.data.meals.length)]))
    };

    const handleRecipe = (recipes) => {
        props.history.push(`/meal/flag/${recipes}`)
    }

    const handleClick = (nameflag) => {
        props.history.push(`/meal/${nameflag}`);
        changeMeal();
    }

    return (
        <div className='containermeal'>
            <div>
                <div className="ContainerSideBar">
                    <h3>Choose an other destination</h3>
                    <div className="ContainerSidebarImg">
                        {flags.map((element, index) => 
                            <div onClick={() => handleClick(element.name)}>
                                <img key={index} src={element.img} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="ContainerRecipe">
                <div className='title-random'>
                    <h1>A bite to discover</h1>
                    <button onClick={() => changeMeal()} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <img
                            
                            className="imgReload"
                            src={load} alt='recharge'
                        /> Another meal
                    </button>
                </div>
                <div className='meal'>
                    <div className="ContainerRecipeImg">
                        <h4>{mealRandom.strMeal}</h4>
                        <img className='img-meal' src={mealRandom.strMealThumb} alt={mealRandom.strMeal} />
                    </div>
                    <button onClick={() =>handleRecipe(mealRandom.idMeal)}>Make me love it</button>
                </div>
            </div>
        </div>
    )
}

export default ContainerMeal;