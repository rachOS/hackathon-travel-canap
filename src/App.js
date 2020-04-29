import React from 'react';
// import {Switch, Route} from 'react-router-dom';
import './App.css';
import TreapContainer from './components/TreapContainer';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* <Switch> */}
        <Header />
        <TreapContainer />
        <Footer />
      {/* </Switch> */}
    </>
  );
}

export default App;
