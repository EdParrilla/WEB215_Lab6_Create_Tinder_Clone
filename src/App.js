import React from 'react';
import './App.css';
import Header  from './Header';
import TinderCards  from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    //BEM Clas snaming convention
    <div className="App">

    <Header />
    <TinderCards />
    <SwipeButtons />

    </div>
  );
}

export default App;
