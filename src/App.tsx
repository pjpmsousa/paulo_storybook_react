import React from 'react';
import './App.css';
import Badge from './components/urbint/badge/Badge';
import { LevelEnum } from './components/urbint/badge/Badge';
import Navigation from './components/urbint/navigation/Navigation';
import Item from './components/urbint/item/Item';

function App() {
  const dummyItem = {
    risk: LevelEnum.medium,
    itemId: "#837403928",
    type: "DESIGN",
    street: "122 Lexington Ave",
    town: "Staten Island, NY",
    startDate: "Starts in 25 days",
    task: "Planting Tree by Nyc Parks"
  }

  return (
    <div className="App">
      <Navigation isIconVisible></Navigation>
      <Badge riskLevel={LevelEnum.high} isBadge></Badge>
      <Item {...dummyItem}></Item>
    </div>
  );
}

export default App;
