"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Label from "./form-label";
import { BASE_URL_COUNTRIES, FIXER_CURRENCY_API } from "@/constants";
import useCountrieshook from "@/hooks/useCountrieshook";
import CurrencyInput from "./currency-input";
import useRateshook from "@/hooks/useGetRates";
export default function CurrencyForm() {
  const [amountToSend, setAmountToSend] = useState("");
  const [amountToRecieve, setAmountToReceive] = useState("");
  const [currencyTo, setCurrencyTo] = useState("🇽🇰 EUR");
  const [currencyFrom, setCurrencyFrom] = useState("🇺🇸 USD");
  const [countries] = useCountrieshook(BASE_URL_COUNTRIES);
  const [rates] = useRateshook(FIXER_CURRENCY_API);

  const data = countries
    ?.filter((country) => "currencies" in country)
    .map((ctr: any) => `${ctr.flag} ${Object.keys(ctr.currencies)[0]}`);

  const handleAmountToSend = (amount: number) => {
    console.log({ amount });
    setAmountToSend(amount.toString());
    console.log({ amountToSend });
    const currencyToRecieve =
      amountToRecieve &&
      (parseFloat(amountToSend) * rates[amountToRecieve]) /
        parseInt(rates[amountToSend]);

    setAmountToReceive(currencyToRecieve.toString());
  };
  const handleAmountToRecieve = (amount: number) => {
    setAmountToReceive(amount.toString());
    const currencyToRecieve =
      (Number(amountToRecieve) * rates[amountToSend]) /
      parseInt(rates[amountToRecieve]);

    setAmountToSend(currencyToRecieve.toString());
  };
  const handleCurrencyToSend = (currencyToSend: string) => {
    console.log({ currencyToSend });
    // const currencyToRecieve =
    //   (amountToSend * rates[currencyFrom]) / Number(rates[currencyToSend]);
    setCurrencyFrom(currencyToSend);
    console.log(
      currencyFrom &&
        (Number(amountToSend) * rates[currencyFrom]) /
          Number(rates[currencyToSend]),
      "from"
    );
    // setAmountToReceive(currencyToRecieve);
  };
  const handleCurrencyToRecieve = (currencyToReceive: string) => {
    console.log({ currencyToReceive });
    // const currencyToRecieve =
    //   (amountToRecieve * rates[currencyFrom]) / rates[currencyToReceive];
    setCurrencyTo(currencyToReceive);
    // setAmountToSend(currencyToRecieve);
  };

  console.log({ rates });
  return (
    <div>
      <form className="bg-white p-6 rounded-md shadow-md border border-gray-200 w-full">
        <p className="w-full md:w-[40%] m-auto text-center text-xl font-medium leading-6 tracking-tight">
          Save upto 50% on foreign exchange rates
        </p>
        <div>
          <Label>Recipient Gets</Label>
          <CurrencyInput
            amountToSend={amountToRecieve}
            currencies={data}
            onChangeAmount={handleAmountToRecieve}
            currency={currencyTo}
            onChangeCurrency={handleCurrencyToRecieve}
          />
        </div>
        <div className="space-y-2 text-[14px]">
          <div className="flex gap-3">
            <span className="text-primary">x</span>
            <span>1.081618 guaranteed rate for 5 min</span>
          </div>
          <div className="flex gap-3">
            <span className="text-primary">+</span>
            <span>$0.00 fee</span>
          </div>
        </div>
        <div>
          <Label>You send</Label>
          <CurrencyInput
            amountToSend={amountToSend}
            currencies={data}
            onChangeAmount={handleAmountToSend}
            currency={currencyFrom}
            onChangeCurrency={handleCurrencyToSend}
          />
        </div>
      </form>
    </div>
  );
}
