import { ChangeEvent } from "react";

interface Props {
  amountToSend: string | number;
  currencies: string[];
  onChangeAmount: (x: any) => void;
  currency: string;
  onChangeCurrency: (x: any) => void;
}
export default function CurrencyInput({
  amountToSend,
  currencies,
  onChangeAmount,
  onChangeCurrency,
  currency,
}: Props) {
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, "set value");
    onChangeAmount(event.target.value);
  };
  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    onChangeCurrency(event.target.value);
  };

  return (
    <div className="flex">
      <input
        value={amountToSend}
        type="text"
        onChange={handleInput}
        className="bg-gray-50 w-[80%] border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-right-none"
      />
      <select
        value={currency}
        onChange={handleSelect}
        className="bg-gray-50 w-[20%] border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {currencies.map((value) => (
          <option
            value={value.split(" ")[1]}
            className="flex gap-8 h-auto items-center"
          >
            <div className="w-[10px] h-[10px] bg-blue-600 rounded-full">
              {value.split(" ")[0]}
            </div>
            <p className="text-red-400">{value.split(" ")[1]}</p>
          </option>
        ))}
      </select>
    </div>
  );
}
