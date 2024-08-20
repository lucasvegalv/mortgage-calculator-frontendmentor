export interface mortgageCalculationParams {
  amount: number | string;
  term: number | string;
  rate: number | string;
  checkbox: string | null;
}

interface totalToRepayProps {
  amount: number;
  monthly: number;
}

export const validate = (input: number | string | null) => {
  const inputType = typeof input;

  if (inputType === "string") {
    alert("string");
  } else {
    alert("no string");
  }
};

export function formatCurrency(amount: number): string {
  const formatter = new Intl.NumberFormat('es-ES', {
    style: 'decimal', // Usa 'decimal' para no mostrar símbolo de moneda
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(amount);
}

function calculateRepayment(
  amount: number,
  term: number,
  rate: number
): number {
  const monthlyRate = rate / 100 / 12;
  const numberOfPayments = term * 12;
  const monthlyPayment =
    (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

  return monthlyPayment;
}

function calculateInterestOnly(amount: number, rate: number): number {
  const monthlyRate = rate / 100 / 12;
  const monthlyPayment = amount * monthlyRate;

  return monthlyPayment;
}

export const mortgageCalculation = ({
  amount,
  term,
  rate,
  checkbox,
}: {
  amount: number | string;
  term: number | string;
  rate: number | string;
  checkbox: string;
}): number => {
  let monthlyPayment: number = 0;


  if (checkbox === "repayment") {
    monthlyPayment = calculateRepayment(
      Number(amount),
      Number(term),
      Number(rate)
    );
  } else if (checkbox === "interest-only") {
    monthlyPayment = calculateInterestOnly(Number(amount), Number(rate));
  }

  
  return monthlyPayment;
};



export const totalToRepayCalculation = ({ amount, monthly }: totalToRepayProps): number => {
  
  const totalToRepay: number = monthly * Number(amount);

  return totalToRepay;
}