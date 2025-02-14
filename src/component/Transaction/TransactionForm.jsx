// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { useGetExchangeRatesQuery } from "../../Utility/exchangeRateApi";

// const TransactionForm = ({ addTransaction }) => {
//   const { data, isLoading } = useGetExchangeRatesQuery("76db9006eec5c3fc53c1f8c7");
//   const [amount, setAmount] = useState("");
//   const [currency, setCurrency] = useState("USD");
//   const [description, setDescription] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!amount || isNaN(amount)) return alert("Enter a valid amount!");

//     // Convert to USD
//     const convertedAmount = currency === "USD" ? amount : (amount / data.conversion_rates[currency]).toFixed(2);
    
//     if (!addTransaction) {
//         console.error("addTransaction function is missing!");
//         return;
//     }

//     addTransaction({ description, amount: convertedAmount, currency: "USD" });

//     setAmount("");
//     setDescription("");
//   };

//   if (isLoading) return <p className="text-white">Loading exchange rates...</p>;

//   return (
//     <form onSubmit={handleSubmit} className="p-4 bg-gray-800 text-white rounded-lg">
//       <input
//         type="text"
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         className="p-2 mb-2 w-full bg-gray-700 text-white rounded"
//       />

//       <input
//         type="number"
//         placeholder="Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         className="p-2 mb-2 w-full bg-gray-700 text-white rounded"
//       />

//       <select
//         value={currency}
//         onChange={(e) => setCurrency(e.target.value)}
//         className="p-2 mb-2 w-full bg-gray-700 text-white rounded"
//       >
//         {Object.keys(data.conversion_rates).map((cur) => (
//           <option key={cur} value={cur}>
//             {cur}
//           </option>
//         ))}
//       </select>

//       <button type="submit" className="p-2 bg-blue-500 hover:bg-blue-700 w-full rounded">
//         Add Transaction
//       </button>
//     </form>
//   );
// };

// export default TransactionForm;














import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGetExchangeRatesQuery } from "../../Utility/exchangeRateApi";

const TransactionForm = ({ addTransaction }) => {
  const { data, isLoading } = useGetExchangeRatesQuery("76db9006eec5c3fc53c1f8c7");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(""); // Add category state

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || isNaN(amount)) return alert("Enter a valid amount!");
    if (!category) return alert("Please select a category!");

    // Convert to USD
    const convertedAmount = currency === "USD" ? amount : (amount / data.conversion_rates[currency]).toFixed(2);

    if (!addTransaction) {
      console.error("addTransaction function is missing!");
      return;
    }

    addTransaction({ description, amount: convertedAmount, currency: "USD", category }); // Include category

    setAmount("");
    setDescription("");
    setCategory(""); // Reset category
  };

  if (isLoading) return <p className="text-white">Loading exchange rates...</p>;

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-800 text-white rounded-lg">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 mb-2 w-full bg-gray-700 text-white rounded"
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 mb-2 w-full bg-gray-700 text-white rounded"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 mb-2 w-full bg-gray-700 text-white rounded"
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Rent">Rent</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="p-2 mb-2 w-full bg-gray-700 text-white rounded"
      >
        {Object.keys(data.conversion_rates).map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>

      <button type="submit" className="p-2 bg-blue-500 hover:bg-blue-700 w-full rounded">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
