import React, { useState } from 'react'
import Dashboard from '../Dashboard/Dashboard.jsx'
import BudgetGoal from '../Dashboard/BudgetGoal.jsx'
import Transaction from '../Transaction/Transaction.jsx'
import ExchangeRates from '../Exchange/ExchangeRates.jsx'
import ExpenseInsights from '../ExpenseInsight/ExpenseInsight.jsx'
import TransactionDisplay from '../Transaction/TransactionDisplay.jsx'

export default function Home() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Dashboard Section */}
      <Dashboard />
      
      <hr/><hr/>

      {/* Transaction & Budget Section */}
      <div className="flex items-center md:items-baseline justify-evenly flex-col md:flex-row p-4">
        
        <div className='mb-4 md:mb-0'><Transaction /></div>
        <div className=''><BudgetGoal /></div>

      </div>

      <hr/><hr/>

      {/* Exchange Rates */}
      <div className="p-4">
        <ExchangeRates />
      </div>

      {/* Expense Insights & Transactions Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        <ExpenseInsights />
        <TransactionDisplay />
      </div>

    </div>
  );
}
