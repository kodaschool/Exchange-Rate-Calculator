import React from "react";
import CurrencyForm from "./currency-form";
import LearnMore from "./learn-more";
import Header from "./header";
const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="grid gap-6 grid-cols-2 h-auto items-center">
        <LearnMore />
        <CurrencyForm />
      </div>
    </div>
  );
};

export default MainLayout;
