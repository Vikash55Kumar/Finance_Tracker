import React from "react";
import { useGetExchangeRatesQuery } from "../../Utility/exchangeRateApi";

const ExchangeRates = () => {
  const apiKey = "76db9006eec5c3fc53c1f8c7"; // Replace with your API key
  const { data, error, isLoading } = useGetExchangeRatesQuery(apiKey);

  if (isLoading) return <p className="text-white">Loading exchange rates...</p>;
  if (error) return <p className="text-white">Error fetching exchange rates</p>;

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg">
      <h2 className="text-lg font-bold mb-2">Exchange Rates</h2>
      <ul>
        <li>USD to INR: {data.conversion_rates.INR}</li>
        <li>USD to EUR: {data.conversion_rates.EUR}</li>
        <li>USD to GBP: {data.conversion_rates.GBP}</li>
      </ul>
    </div>
  );
};

export default ExchangeRates;
