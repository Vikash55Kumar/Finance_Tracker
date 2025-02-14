import React from "react";
import Chart from "react-apexcharts";

const DashboardChart = () => {
  const chartOptions = {
    chart: {
      id: "finance-tracker-chart",
      toolbar: { show: false },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    },
    yaxis: {
      labels: { formatter: (value) => `₹${value}` },
    },
    stroke: { curve: "smooth" },
    colors: ["#00C853", "#D32F2F"],
  };

  const series = [
    { name: "Income", data: [7000, 8000, 7500, 9000, 10000] },
    { name: "Expenses", data: [3000, 5000, 4000, 7000, 6000] },
  ];

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-gray-700">Income vs Expenses</h2>
      <Chart options={chartOptions} series={series} type="line" height={300} />
    </div>
  );
};

export default DashboardChart;
