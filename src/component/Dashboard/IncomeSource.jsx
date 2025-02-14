import { useState } from "react";
import Chart from "react-apexcharts";

const IncomeSource = () => {
  const chartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false }, 
      line: {show: false}
    },
    xaxis: {
      categories: ["Salary", "E-commerce", "Google Adsence", "Teaching"],
      labels: {
        style: {
          colors: "#ffffff", fontSize: "14px" // Make x-axis labels white
        },
      },
      axisTicks: { show: false }, 
    //   axisBorder: { show: false }, 
    },
    yaxis: {show:false},
    grid: { show: false },
    colors: ["#FF0000"], 
  };

  const series = [
    {
      name: "Leads",
      data: [3400, 4543, 5214, 3276], 
    },
  ];

  return (
    <div className="max-w-sm w-full bg-gray-800 rounded-lg shadow-sm p-4 pb-0 md:p-6 md:pb-0">
      <div className="flex justify-between border-b mb-4 border-gray-600">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center me-3">
            <svg className="w-6 h-6 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 19">
              <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
              <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
          </div>
          <div>
            <h5 className="leading-none text-2xl font-bold text-white pb-1">Income Source</h5>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-2">
        <dl className="flex items-center">
          <dt className="text-gray-300 text-sm font-normal me-1">Money spent:</dt>
          <dd className="text-white text-sm font-semibold">$3,232</dd>
        </dl>
        <dl className="flex items-center justify-end">
          <dt className="text-gray-300 text-sm font-normal me-1">Conversion rate:</dt>
          <dd className="text-white text-sm font-semibold">1.2%</dd>
        </dl>
      </div> */}
      <Chart options={chartOptions} series={series} type="bar" height={250} />
    </div>
  );
};

export default IncomeSource;
