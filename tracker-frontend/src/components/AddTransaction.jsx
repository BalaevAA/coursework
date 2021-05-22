import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Category } from './Category';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <div className="container4">
      <h3>Добавить транзакицию</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Ваша транзакиция</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Пишите сюда..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >скока денег <br />
            (отрицательная сумма - затраты, положительная - прибыль)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="На какую сумму..." />
        </div>
        <label htmlFor="text">Выберите категорию</label>
        <Category />
        <button className="btn">Добавить</button>
      </form>
    </div>
  )
}