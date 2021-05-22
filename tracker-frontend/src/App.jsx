import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Profit } from './components/Profit';
import { History } from './components/History';
import { AddTransaction } from './components/AddTransaction';
import { DoughnutChart } from './components/Diagram';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <Profit />
      <DoughnutChart />
      <div className="container">
        <History />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;