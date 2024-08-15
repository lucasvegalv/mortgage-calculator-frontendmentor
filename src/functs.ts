interface MortgageCalculationParams {
  amount: number | string,
  term: number | string,
  rate: number | string,

}

export const mortgageCalculation = ({amount, term, rate}: MortgageCalculationParams):number => {
  console.log(`
      ${amount},
      ${term},
      ${rate},

    `)

    const result = Number(amount) * Number(term) * Number(rate);

    return result;
}