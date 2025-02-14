import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_BUDGET_GOAL_REQUEST, SET_BUDGET_GOAL_SUCCESS, SET_BUDGET_GOAL_FAIL } from "../reducer/budgetReducer";

const BudgetGoal = () => {
  const [goal, setGoal] = useState("");
  const dispatch = useDispatch();
  const { budgetGoals, loading, error } = useSelector((state) => state.budget);

  const handleAddGoal = () => {
    if (!goal) return;
    
    try {
      dispatch(SET_BUDGET_GOAL_REQUEST());
      setTimeout(() => {
        dispatch(SET_BUDGET_GOAL_SUCCESS({ name: goal, amount: 5000 })); // Example goal
      }, 1000);
    } catch (err) {
      dispatch(SET_BUDGET_GOAL_FAIL("Failed to set budget goal"));
    }
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg">
      <h2 className="text-lg font-bold mb-2">Set Budget Goal</h2>
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="p-2 text-black rounded-md"
      />
      <button onClick={handleAddGoal} className="ml-2 p-2 bg-blue-500 rounded-md">
        Add Goal
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="mt-4">
        {budgetGoals.map((item, index) => (
          <li key={index} className="p-2 bg-gray-700 rounded-md mt-2">{item.name}: ₹{item.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetGoal;
