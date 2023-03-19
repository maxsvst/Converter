import React from "react";
import "../index.css";

export default function CurrencyInput({
  amount,
  currency,
  rates,
  handleAmountChange,
  handleCurrencyChange,
}) {
  return (
    <div>
      <input
        className="converter_input"
        value={amount}
        onChange={(e) => handleAmountChange(e.target.value)}
      ></input>
      <select
        className="converter_select"
        value={currency}
        onChange={(e) => handleCurrencyChange(e.target.value)}
      >
        {Object.keys(rates).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
