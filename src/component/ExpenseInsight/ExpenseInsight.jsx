import React from "react";
import { useSelector } from "react-redux";

const ExpenseInsights = () => {
  const transactions = useSelector((state) => state.transaction?.transactions || []);

  console.log("Redux Transaction State:", transactions); // Debugging log

  if (!Array.isArray(transactions) || transactions.length === 0) {
    return <p className="text-white">No transactions yet.</p>;
  }

  // Categorize expenses
  const categories = transactions.reduce((acc, transaction) => {
    const category = transaction.category || "Uncategorized"; // Handle missing categories
    const amount = Number(transaction.amount) || 0; // Ensure amount is a valid number

    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {});

  // Find highest spending category
  const highestCategory = Object.entries(categories)
    .sort((a, b) => (Number(b[1]) || 0) - (Number(a[1]) || 0))[0];

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg">
      <h2 className="text-lg font-bold mb-2">Expense Insights</h2>

      <p>
        You spent the most on: <b>{highestCategory ? highestCategory[0] : "N/A"}</b> 
        (${highestCategory && !isNaN(highestCategory[1]) ? Number(highestCategory[1]).toFixed(2) : "0.00"})
      </p>

      {highestCategory && highestCategory[0] === "Dining Out" && (
        <p className="text-yellow-400 mt-2">💡 Consider cooking at home to save money!</p>
      )}
    </div>
  );
};

export default ExpenseInsights;
