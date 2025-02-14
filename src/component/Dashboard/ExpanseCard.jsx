import { Card } from "flowbite-react";

const ExpenseCard = () => {
  return (
    <Card className="max-w-sm shadow-md">
      <h5 className="text-lg font-bold text-gray-900">Total Expenses</h5>
      <p className="text-red-600 text-2xl">₹30,000</p>
    </Card>
  );
};

export default ExpenseCard;
