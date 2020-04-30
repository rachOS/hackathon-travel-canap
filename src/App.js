import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import TreapContainer from './components/TreapContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import ContainerMeal from './components/ContainerMeal';
import Recipes from './components/Recipes';

function App() {
  return (
    <>
      <Header />
        <Switch>
          <Route exact path='/' component={TreapContainer} />
          <Route exact path='/meal/:nameflag' component={ContainerMeal} />
          <Route path='/meal/flag/:idmeal' component={Recipes} />

        </Switch>
      <Footer />
    </>
  );
}

export default App;
