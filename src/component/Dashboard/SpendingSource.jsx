import React, { useState } from "react";
import Chart from "react-apexcharts";

const SpendingSource = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "bar",
      toolbar: { show: false },
      background: "#1F2937", // ✅ Dark background
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "70%",
        distributed: false,
      },
    },
    xaxis: {
      categories: ["Housing", "Food", "Transportation", "Traveling"],

      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: { colors: "#ffffff", fontSize: "14px" }, // ✅ White labels on Y-axis
      },
    },
    grid: { show: false }, 
    colors: ["#FF5733", "#33FF57", "#3357FF", "#FFC300"],
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: "Expense",
      data: [25000, 15000, 12000, 8000],
    },
  ]);

  return (
    <div className="max-w-sm w-full bg-gray-800 rounded-lg shadow-sm p-4 md:p-6">
      <div className="flex justify-between border-b mb-4 border-gray-600">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center me-3">
            <svg className="w-6 h-6 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 19">
              <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
              <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
          </div>
          <div>
            <h5 className="leading-none text-2xl font-bold text-white pb-1">Spendings Source</h5>
          </div>
        </div>
      </div>

      {/* Horizontal Bar Chart */}
      <div id="bar-chart" className="flex w-full">
        <Chart options={chartOptions} series={chartSeries} type="bar" height={250} />
      </div>
    </div>
  );
};

export default SpendingSource;
