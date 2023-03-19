import React, { useEffect, useState } from "react";
import "../index.css";

import { URL, requestOptions, numFormat } from "../helpers/common";
import CurrencyInput from "./CurrencyInput";
import Header from "./Header";

export default function Converter() {
  const [currentUsd, setCurrentUsd] = useState();
  const [currentEur, setCurrentEur] = useState();

  const [firstCurrency, setFirstCurrency] = useState("UAH");
  const [secondCurrency, setSecondCurrency] = useState("UAH");

  const [firstAmount, setFirstAmount] = useState(1);
  const [secondAmount, setSecondAmount] = useState(1);

  const [rates, setRates] = useState([]);

  useEffect(() => {
    getCurrency(URL);
  }, []);

  const getCurrency = (url) => {
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => JSON.parse(result))
      .then((parsed) => {
        setCurrentUsd(numFormat(1 / parsed.rates.USD));
        setCurrentEur(numFormat(1 / parsed.rates.EUR));
        setRates(parsed.rates);
      })
      .catch((error) => console.log("error", error));
  };

  const handleFirstAmountChange = (firstAmount) => {
    setSecondAmount(
      numFormat((firstAmount * rates[secondCurrency]) / rates[firstCurrency])
    );
    setFirstAmount(firstAmount);
  };

  const handleFirstCurrencyChange = (firstCurrency) => {
    setSecondAmount(
      numFormat((firstAmount * rates[secondCurrency]) / rates[firstCurrency])
    );
    setFirstCurrency(firstCurrency);
  };

  const handleSecondAmountChange = (secondAmount) => {
    setFirstAmount(
      numFormat((secondAmount * rates[firstCurrency]) / rates[secondCurrency])
    );
    setSecondAmount(secondAmount);
  };

  const handleSecondCurrencyChange = (secondCurrency) => {
    setFirstAmount(
      numFormat((secondAmount * rates[firstCurrency]) / rates[secondCurrency])
    );
    setSecondCurrency(secondCurrency);
  };

  return (
    <div>
      <Header currentUsd={currentUsd} currentEur={currentEur} />
      <div className="converter">
        <CurrencyInput
          className="converter_left-input"
          amount={firstAmount}
          currency={firstCurrency}
          rates={rates}
          handleAmountChange={handleFirstAmountChange}
          handleCurrencyChange={handleFirstCurrencyChange}
        />
        <CurrencyInput
          className="converter_right-input"
          amount={secondAmount}
          currency={secondCurrency}
          rates={rates}
          handleAmountChange={handleSecondAmountChange}
          handleCurrencyChange={handleSecondCurrencyChange}
        />
      </div>
    </div>
  );
}
