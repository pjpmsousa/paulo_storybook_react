import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent';
import Badge from './components/urbint/badge/Badge';
import { LevelEnum } from './components/urbint/badge/Badge';
import Navigation from './components/urbint/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Badge riskLevel={LevelEnum.high} isBadge></Badge>
    </div>
  );
}

export default App;
