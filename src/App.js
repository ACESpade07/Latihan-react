import './App.css';
import React, { useState } from 'react';
import Introduction from './components/introduction';
import Count from './components/count';
import Profil from './components/profil';

function App() {
  const [count, setCount] =useState(0);

  return (
    <Profil />
  );
}

export default App;
