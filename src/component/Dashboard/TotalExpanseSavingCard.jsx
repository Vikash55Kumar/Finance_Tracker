import Chart from "react-apexcharts";

const TotalExpanseSavingCard = ({data, name, amount}) => {
    const chartOptions = {
        chart: { 
          type: "area",
          toolbar: { show: false }, // Removes the menu/home icon
          zoom: { enabled: false }, 
        },
        grid: { show: false }, // Hides grid lines
        dataLabels: { enabled: false }, // Hides data labels
        stroke: { 
          curve: "smooth", 
          width: 2, 
          colors: ["#FF0000"] // Red color for the line
        },
        xaxis: {
          labels: { show: false }, // Hides X-axis labels
          axisBorder: { show: false },
          axisTicks: { show: false },
        },
        yaxis: { show: false }, // Hides Y-axis labels
        tooltip: { enabled: false }, // Hides tooltips
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#FF0000"], // Red gradient effect
            opacityFrom: 0.4,
            opacityTo: 0,
          },
        },
        colors: ["#FF0000"], // Set line color to red
        series: [{ name: "Users", data: data }],
      };
      
  return (
    <div className="max-w-sm w-full bg-gray-800 rounded-lg shadow-sm p-4 md:p-4">
      <div className="flex justify-between">
        <div>
          <p className="font-normal text-2xl text-white pb-2">{name}</p>

          <h5 className="leading-none text-xl font-bold text-white pb-2">{amount}</h5>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500">
          12%
          <svg className="w-3 h-3 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
          </svg>
        </div>
      </div>
      <Chart options={chartOptions} series={chartOptions.series} type="area" height={130} />
    </div>
  );
};

export default TotalExpanseSavingCard;
