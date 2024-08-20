import { useState } from "react";

interface InputProps {
  changeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  amount: number | string;
  icon: string;
  label: string;
  iconFirst: boolean;
}

const Input = ({
  label,
  amount,
  icon,
  changeFunction,
  iconFirst,
}: InputProps) => {
  const [focus, setFocus] = useState(false);
  const [isError, setIsError] = useState(false);


  const handleFocus = () => {
    setFocus(true);
    setIsError(false)
  };

  const handleBlur = (amount: number | string) => {
    setFocus(false);
    const error = amount === "";
    setIsError(error);
  };


  const iconFirstDiv = (
    <div>
      <label htmlFor="amount" className="clr-neutral-500 jakarta-600 text-xs">
        {label}
      </label>
      <div
        className={`border-2 border-opacity-0 rounded-sm flex mt-1 hover:border-clr-neutral-500 hover:border-opacity-60 hover:border-2 transition-all focus-within:border-clr-primary-lime focus-within:hover:border-clr-primary-lime ${
          isError &&
          "border-2 border-clr-primary-red border-opacity-100 focus-within:border-clr-primary-red focus-within:hover:border-clr-primary-red hover:border-clr-primary-red hover:border-opacity-100 transition-all"
        }`}
      >
        <p
          className={`px-3 py-2 bg-blue-100 ${
            focus && "bg-clr-primary-lime text-clr-neutral-700"
          } rounded-l-xs text-clr-neutral-500 font-bold focus-within:bg-blue-200 ${
            isError && "bg-clr-primary-red text-clr-white"
          }`}
        >
          {icon}
        </p>
        <input
          onFocus={handleFocus}
          onBlur={(e) => handleBlur(e.target.value)}
          value={amount}
          type="number"
          id="amount"
          min={0}
          className="text-clr-neutral-700 font-bold focus:outline-none w-full rounded-r-sm px-3"
          onChange={changeFunction}
        />
      </div>
      {isError && (
        <p className="text-xs text-clr-primary-red jakarta-600 mt-1">
          This field is required
        </p>
      )}
    </div>
  );

  const iconLastDiv = (
    <div>
      <label htmlFor="amount" className="clr-neutral-500 jakarta-600 text-xs">
        {label}
      </label>
      <div
        className={`border-2 border-opacity-0 rounded-sm flex mt-1 hover:border-clr-neutral-500 hover:border-opacity-60 hover:border-2 transition-all focus-within:border-clr-primary-lime focus-within:hover:border-clr-primary-lime ${
          isError &&
          "border-2 border-clr-primary-red border-opacity-100 focus-within:border-clr-primary-red focus-within:hover:border-clr-primary-red hover:border-clr-primary-red hover:border-opacity-100 transition-all"
        }`}
      >
        <input
          onFocus={handleFocus}
          onBlur={(e) => handleBlur(e.target.value)}
          value={amount}
          type="number"
          id="amount"
          min={0}
          className="text-clr-neutral-700 font-bold focus:outline-none w-full rounded-r-sm px-3"
          onChange={changeFunction}
        />
        <p
          className={`px-3 py-2 bg-blue-100 ${
            focus && "bg-clr-primary-lime text-clr-neutral-700"
          } rounded-l-xs text-clr-neutral-500 font-bold focus-within:bg-blue-200 ${
            isError && "bg-clr-primary-red text-clr-white"
          }`}
        >
          {icon}
        </p>
      </div>
      {isError && (
        <p className="text-xs text-clr-primary-red jakarta-600 mt-1">
          This field is required
        </p>
      )}
    </div>
  );

  return iconFirst ? iconFirstDiv : iconLastDiv;
};

export default Input;
