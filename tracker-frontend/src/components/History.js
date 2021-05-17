  
import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const History = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="container2">
      <h3 className = "historyHead">История</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </div>
  )
}