import { useDispatch, useSelector } from "react-redux";
import { SET_BUDGET_GOAL_REQUEST, SET_BUDGET_GOAL_SUCCESS, SET_BUDGET_GOAL_FAIL } from "../../reducer/budgetReducer";

const BudgetComponent = () => {
  const dispatch = useDispatch();
  const { budgetGoals, loading, error } = useSelector((state) => state.budget);

  const addBudgetGoal = (goal) => {
    dispatch(SET_BUDGET_GOAL_REQUEST());
    try {
      // Simulating API call (Replace with actual logic)
      setTimeout(() => {
        dispatch(SET_BUDGET_GOAL_SUCCESS(goal));
      }, 1000);
    } catch (err) {
      dispatch(SET_BUDGET_GOAL_FAIL("Failed to add budget goal"));
    }
  };

  return (
    <div>
      <button onClick={() => addBudgetGoal({ title: "Save ₹5000", amount: 5000 })}>
        Add Budget Goal
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {budgetGoals.map((goal, index) => (
          <li key={index}>{goal.title} - ₹{goal.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetComponent;
