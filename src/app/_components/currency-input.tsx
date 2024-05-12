interface Props {
  amountToSend: string | number;
  currencies?: string[];
  onChange: (x: any) => void;
}
export default function CurrencyInput({
  amountToSend,
  currencies,
  onChange,
}: Props) {
  return (
    <div>
      <input value={amountToSend} onChange={onChange} />
      {/* <select>
        {currencies.map((currency) => (
          <option value={currency}>{currency}</option>
        ))}
      </select> */}
    </div>
  );
}
