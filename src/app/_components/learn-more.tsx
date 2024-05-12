import { features } from "@/data/constants";

export default function LearnMore() {
  return (
    <div className="space-y-2">
      <p className="text-3xl font-medium w-[70%]">
        Compare foreign exchange rates and save money
      </p>
      <p className="text-secondary text-base">
        Get the best exchnage rates from leading providers and save money on
        your international payments.
      </p>
      <ul>
        {features.map((item, index) => (
          <li
            key={index}
            className="text-secondary my-1 list-desc list-item text-base"
          >
            {item}
          </li>
        ))}
      </ul>
      <button className="bg-primary text-white py-2 text-base px-4 text-center border-none rounded-md">
        Learn More
      </button>
    </div>
  );
}
