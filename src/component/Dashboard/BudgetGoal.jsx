import React, { useEffect, useState } from "react";

const BudgetGoal = ({ month }) => {
    month="February 2025"
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [inputBudget, setInputBudget] = useState("");
  const [inputExpense, setInputExpense] = useState("");

  // Load budget & expenses from localStorage
  useEffect(() => {
    const storedBudget = localStorage.getItem(`budget_${month}`);
    const storedExpenses = localStorage.getItem(`expenses_${month}`);

    if (storedBudget) setBudget(Number(storedBudget));
    if (storedExpenses) setExpenses(Number(storedExpenses));
  }, [month]);

  // Save budget
  const handleSetBudget = () => {
    if (!inputBudget || inputBudget < 0) return alert("Enter a valid budget!");
    setBudget(Number(inputBudget));
    localStorage.setItem(`budget_${month}`, inputBudget);
    setInputBudget("");
  };

  // Add Expense
  const handleAddExpense = () => {
    if (!inputExpense || inputExpense < 0) return alert("Enter a valid expense!");
    const newExpense = expenses + Number(inputExpense);
    setExpenses(newExpense);
    localStorage.setItem(`expenses_${month}`, newExpense);
    setInputExpense("");
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white w-96">
      <h3 className="text-xl font-bold">Budget for {month}</h3>

      {/* Set Budget */}
      <div className="mt-4">
        <label className="block text-white mb-2">Set Budget (₹):</label>
        <input
          type="number"
          className="bg-gray-700 text-white p-2 rounded w-full"
          value={inputBudget}
          onChange={(e) => setInputBudget(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white mt-2 px-4 py-2 rounded w-full"
          onClick={handleSetBudget}
        >
          Save Budget
        </button>
      </div>

      {/* Add Expenses */}
      <div className="mt-4">
        <label className="block text-white mb-2">Add Expense (₹):</label>
        <input
          type="number"
          className="bg-gray-700 text-white p-2 rounded w-full"
          value={inputExpense}
          onChange={(e) => setInputExpense(e.target.value)}
        />
        <button
          className="bg-red-500 hover:bg-red-600 text-white mt-2 px-4 py-2 rounded w-full"
          onClick={handleAddExpense}
        >
          Add Expense
        </button>
      </div>

      {/* Display Budget & Expenses */}
      <div className="mt-4">
        <p>🎯 Budget: ₹{budget}</p>
        <p>💸 Expenses: ₹{expenses}</p>
        <p
          className={`font-bold ${expenses > budget ? "text-red-500" : "text-green-400"}`}
        >
          {expenses > budget ? "⚠️ Over Budget!" : "✅ Within Budget"}
        </p>
      </div>
    </div>
  );
};

export default BudgetGoal;
