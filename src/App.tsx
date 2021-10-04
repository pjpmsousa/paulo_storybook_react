import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent';
import Badge from './components/urbint/badge/Badge';
import { LevelEnum } from './components/urbint/badge/Badge';

function App() {
  return (
    <div className="App">
      <Badge riskLevel={LevelEnum.unknown} isBadge></Badge>
    </div>
  );
}

export default App;
