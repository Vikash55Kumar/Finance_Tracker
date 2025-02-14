import React, { useState, useEffect } from "react";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [type, setType] = useState("expense"); // income or expense
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("food");
  const [editId, setEditId] = useState(null);

  // Load transactions from localStorage on mount
  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (savedTransactions) setTransactions(savedTransactions);
  }, []);

  // Save transactions to localStorage
  const saveTransactions = (updatedTransactions) => {
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  };

  // Add or Update Transaction
  const handleAddTransaction = () => {
    if (!amount || amount <= 0) return alert("Enter a valid amount!");

    const newTransaction = {
      id: editId || Date.now(),
      type,
      amount: Number(amount),
      category,
    };

    let updatedTransactions;
    if (editId) {
      // Edit transaction
      updatedTransactions = transactions.map((tx) =>
        tx.id === editId ? newTransaction : tx
      );
      setEditId(null);
    } else {
      // Add new transaction
      updatedTransactions = [...transactions, newTransaction];
    }

    saveTransactions(updatedTransactions);
    setAmount("");
  };

  // Edit Transaction
  const handleEdit = (id) => {
    const tx = transactions.find((tx) => tx.id === id);
    setAmount(tx.amount);
    setType(tx.type);
    setCategory(tx.category);
    setEditId(id);
  };

  // Delete Transaction
  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter((tx) => tx.id !== id);
    saveTransactions(updatedTransactions);
  };

  // Calculate total income and expenses
  const totalIncome = transactions
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + tx.amount, 0);
  const totalExpense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + tx.amount, 0);
  const balance = totalIncome - totalExpense;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white w-96">
      <h2 className="text-xl font-bold">💰 Transaction Manager</h2>

      {/* Add Transaction */}
      <div className="mt-4">
        <label className="block">Type:</label>
        <select
          className="bg-gray-700 text-white p-2 rounded w-full"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <label className="block mt-2">Amount (₹):</label>
        <input
          type="number"
          className="bg-gray-700 text-white p-2 rounded w-full"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label className="block mt-2">Category:</label>
        <select
          className="bg-gray-700 text-white p-2 rounded w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="food">🍔 Food</option>
          <option value="rent">🏠 Rent</option>
          <option value="entertainment">🎬 Entertainment</option>
          <option value="salary">💼 Salary</option>
          <option value="other">🛒 Other</option>
        </select>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white mt-2 px-4 py-2 rounded w-full"
          onClick={handleAddTransaction}
        >
          {editId ? "Update Transaction" : "Add Transaction"}
        </button>
      </div>

      {/* Transaction List */}
      <h3 className="text-lg font-semibold mt-4">📜 Transactions</h3>
      <ul className="mt-2 max-h-40 overflow-y-auto">
        {transactions.map((tx) => (
          <li
            key={tx.id}
            className={`p-2 flex justify-between ${
              tx.type === "income" ? "text-green-400" : "text-red-400"
            }`}
          >
            <span>
              {tx.category} - ₹{tx.amount}
            </span>
            <span>
              <button
                className="bg-yellow-500 px-2 py-1 text-black rounded mr-2"
                onClick={() => handleEdit(tx.id)}
              >
                ✏️
              </button>
              <button
                className="bg-red-500 px-2 py-1 text-white rounded"
                onClick={() => handleDelete(tx.id)}
              >
                ❌
              </button>
            </span>
          </li>
        ))}
      </ul>

      {/* Summary */}
      <div className="mt-4 p-3 bg-gray-700 rounded-lg">
        <p className="text-green-400">🔼 Income: ₹{totalIncome}</p>
        <p className="text-red-400">🔽 Expenses: ₹{totalExpense}</p>
        <p
          className={`font-bold ${
            balance < 0 ? "text-red-500" : "text-green-400"
          }`}
        >
          💰 Balance: ₹{balance}
        </p>
      </div>
    </div>
  );
};

export default Transaction;
