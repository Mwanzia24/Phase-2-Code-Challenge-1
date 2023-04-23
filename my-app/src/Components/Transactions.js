import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('/api/transactions')
      .then(response => {
        setTransactions(response.data.transactions);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Recent Transactions</h1>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.date} - {transaction.description} - {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;


