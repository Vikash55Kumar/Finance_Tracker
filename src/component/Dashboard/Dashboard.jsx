import React from 'react';
import profile from "../../assets/Cropped_Image2.png";
import TotalExpanseSavingCard from "./TotalExpanseSavingCard";
import IncomeSource from "./IncomeSource";
import SpendingSource from "./SpendingSource";

const Dashboard = () => {
  const financialData = [
    { name: "Total Income", amount: "132.4k", data: [201, 250, 200, 400, 500, 460, 420] },
    { name: "Expenses", amount: "32.4k", data: [101, 150, 290, 140, 450, 160, 320] },
    { name: "Saving", amount: "100.4k", data: [100, 100, -90, 260, 50, 300, 100] }
  ];

  const today = new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-4">
        <span className="text-2xl font-bold">Personal Finance Dashboard</span>
        <div className="flex hidden md:block space-x-3">
          <span className="bg-gray-800 p-2 rounded">Dashboard</span>
          <span className="bg-gray-800 p-2 rounded">{today}</span>
        </div>
        <div className="flex  items-center space-x-2">
          <div className="text-right">
            <span className="text-lg font-semibold block">Vikash Kumar</span>
            <span className="text-sm">Financer</span>
          </div>
          <img src={profile} className="w-12 h-12 rounded-full" alt="Profile" />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Sidebar */}
        <aside className="bg-gray-800 p-4 rounded md:col-span-1">
          <h2 className="text-lg font-semibold mb-2">Financial Months</h2>
          <nav className="grid grid-cols-3 gap-2 md:grid-cols-1">
            {["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"].map((month, index) => (
              <button key={index} className={`px-3 py-1 rounded ${month === "JUL" ? "bg-red-500" : "bg-gray-700"} hover:bg-red-600`}>
                {month}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3 grid gap-4">
          <section className="bg-gray-800 p-4 rounded flex flex-wrap justify-between">
            <div>
              <span className="text-2xl font-bold block">Available Balance</span>
              <span className="text-xl text-sky-300">$14,822</span>
            </div>
            <div className="bg-orange-400 p-2 mt-2 rounded">
              <span className="text-xl font-bold block">Total Net Worth</span>
              <span className="text-xl">$584,822</span>
            </div>
          </section>

          {/* Statistics Total Income, Expenses, Saving Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {financialData.map((item, index) => (
              <TotalExpanseSavingCard key={index} data={item.data} name={item.name} amount={item.amount} />
            ))}
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <IncomeSource />
            <SpendingSource />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
