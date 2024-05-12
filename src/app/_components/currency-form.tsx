"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Label from "./form-label";
import { BASE_URL_COUNTRIES } from "@/constants";
import useCountrieshook from "@/hooks/useCountrieshook";
import CurrencyInput from "./currency-input";
export default function CurrencyForm() {
  const [amountToSend, setAmountToSend] = useState(1);
  const [amountToRecieve, setAmountToReceive] = useState(1);
  const [currencies, setCurrencies] = useState([]);
  const [countries] = useCountrieshook(BASE_URL_COUNTRIES);
  const data = countries
    ?.filter((country) => "currencies" in country)
    .map((ctr: any) => ` ${ctr.flag} ${Object.keys(ctr.currencies)[0]}`);

  console.log(data);
  const handleAmountToSend = () => {};
  const [rates, setRates] = useState();
  const [ratesFetched, setRatesFetched] = useState(false);

  const getRates = async () => {
    // fetch the data from API
    const response = await axios(
      `https://api.exchangeratesapi.net/v1/exchange-rates/latest?access_key=AYnshIvnWo2t17Gw`
    );
    setRates(response.data);
  };

  useEffect(() => {
    getRates();
  }, []);
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
            amountToSend={amountToSend}
            currencies={countries}
            onChange={handleAmountToSend}
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
          <input type="text" />
        </div>
      </form>
    </div>
  );
}
