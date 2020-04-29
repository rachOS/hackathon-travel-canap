import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import TreapContainer from './components/TreapContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import ContainerMeal from './components/ContainerMeal';
import Destination from './components/Destination';

function App() {
  return (
    <>
      <Header />
        <Switch>
          {/* <Route path='/destination' component={Destination} /> */}
          <Route exact path='/' component={TreapContainer} />
          <Route path='/meal/:nameflag' component={ContainerMeal} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;
