import React, { useState } from "react";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  formatCurrency,
  mortgageCalculation,
  totalToRepayCalculation,
} from "../../functs";

interface FormProps {
  uploadMonthly: React.Dispatch<React.SetStateAction<string>>;
  uploadTotal: React.Dispatch<React.SetStateAction<string>>;
}

const Form = ({ uploadMonthly, uploadTotal }: FormProps) => {
  const [amount, setAmount] = useState<number | string>("");
  const [term, setTerm] = useState<number | string>("");
  const [rate, setRate] = useState<number | string>("");
  const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null);

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleChangeTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(Number(e.target.value));
  };

  const handleChangeRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRate(Number(e.target.value));
  };

  const handleCheckboxChange = (checkboxId: string) => {
    setSelectedCheckbox((prev) => (prev === checkboxId ? null : checkboxId));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(amount === "" || term === "" || rate === "" || selectedCheckbox === null) {
      alert('There is empty inputs. Be sure they have some values!')
    } else {
      const monthlyResults = mortgageCalculation({
        amount,
        term,
        rate,
        checkbox: selectedCheckbox,
      });
  
      const totalResults = totalToRepayCalculation({
        amount,
        monthly: monthlyResults,
      });
  
      uploadMonthly(`$${formatCurrency(monthlyResults)}`);
      uploadTotal(`$${formatCurrency(totalResults)}`);
    }

  };

  return (
    <section className="bg-white w-full p-5 flex flex-col text-left flex-1 lg:rounded-3xl lg:rounded-tr-none">
      <h1 className="jakarta-700 text-xl clr-neutral-700">
        Mortgage Calculator
      </h1>
      <p className="text-xs cursor-pointer underline clr-neutral-500 jakarta-600 opacity-70 hover:text-clr-neutral-900 transition-all">
        Clear All
      </p>

      <form
        onSubmit={handleSubmit}
        action=""
        method=""
        className="flex flex-col w-full gap-5 mt-5"
      >
        <Input
          changeFunction={handleChangeAmount}
          amount={amount}
          icon="$"
          label="Mortgage Amount"
          iconFirst={true}
        />
        <Input
          changeFunction={handleChangeTerm}
          amount={term}
          icon="years"
          label="Mortgage Term"
          iconFirst={false}
        />
        <Input
          changeFunction={handleChangeRate}
          amount={rate}
          icon="%"
          label="Mortgage Rate"
          iconFirst={false}
        />

        <label htmlFor="type1" className="clr-neutral-500 jakarta-600 text-xs">
          Mortgage Type
        </label>

        <div className="flex flex-col -mt-3 space-y-5">
          <Checkbox
            title="Repayment"
            isChecked={selectedCheckbox === "repayment"}
            onChange={() => handleCheckboxChange("repayment")}
          />
          <Checkbox
            title="Interest Only"
            isChecked={selectedCheckbox === "interest-only"}
            onChange={() => handleCheckboxChange("interest-only")}
          />
        </div>

        <Button
          img="src\assets\images\icon-calculator.svg"
          text="Calculate Repayments"
          type="submit"
        />
      </form>
    </section>
  );
};

export default Form;
