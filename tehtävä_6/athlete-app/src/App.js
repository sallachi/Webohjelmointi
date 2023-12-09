// src/App.js
import React from 'react';
import './App.css';
import { AthleteProvider } from './AthleteContext';
import SelectAthlete from './components/SelectAthlete';
import { useState } from 'react';

function App() {

  return (
    <AthleteProvider>
      <div>
        <SelectAthlete />
      </div>
    </AthleteProvider>
  );
}

export default App;
