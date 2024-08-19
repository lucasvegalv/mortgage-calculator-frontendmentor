export interface mortgageCalculationParams {
  amount: number;
  term: number;
  rate: number;
}

export const validate = (input: number | string | null) => {

  const inputType = typeof(input)

  if(inputType === "string")  {
    alert("string")
  } else {
    alert("no string")
  }
};

export const mortgageCalculation = ({
  amount,
  term,
  rate,
}: mortgageCalculationParams): number => {
  const monthlyRate = rate / 100 / 12;
  const totalPayments = term * 12;

  const monthlyPayment =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);

  return monthlyPayment;
};
