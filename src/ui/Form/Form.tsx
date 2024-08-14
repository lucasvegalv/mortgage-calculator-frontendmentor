import React, { useState } from 'react'
import Button from '../../components/button'

const Form = () => {

  const [amount, setAmount] = useState<number | string>();
  const [term, setTerm] = useState<number | string>(' ');
  const [rate, setRate] = useState<number | string>(' ');
  const [check, setCheck] = useState(false)

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleChangeTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(Number(e.target.value));
  };

  const handleChangeRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRate(Number(e.target.value));
  };

  const handleChangeCheckBox = () => {
    setCheck(prev => !prev)
    console.log(check)
  };


  return (
    <section className='bg-gray-100 p-5 flex flex-col text-left'>
      <h1 className='jakarta-700 text-2xl clr-neutral-700'>Mortgage Calculator</h1>
      <p className='text-sm cursor-pointer underline clr-neutral-500 jakarta-600 opacity-70'>Clear All</p>
      
      <form action='' method='' className='flex flex-col w-full gap-5 mt-5'>
        
        <div >
          <label htmlFor="amount" className='clr-neutral-500 jakarta-600 text-sm'>Mortgage Amount</label>
          <div className='flex mt-1'>
            <p className='px-3 py-1 bg-blue-100 rounded-l-sm clr-neutral-500 font-bold'>$</p>
            <input value={amount} type="number" id='amount' min={0} className='w-full rounded-r-sm px-3 focus:outline-gray-200' onChange={handleChangeAmount} />
          </div>
        </div>

        <div>
          <label htmlFor="term" className='clr-neutral-500 jakarta-600 text-sm'>Mortgage Term</label>
          <div className='flex mt-1'>
            <input value={term} type="number" min={0} id='term' className='w-full rounded-l-sm px-3 focus:outline-gray-200' onChange={handleChangeTerm} />
            <p className='px-3 py-1 bg-blue-100 rounded-r-sm clr-neutral-500 font-bold'>years</p>
          </div>
        </div>

        <div>
          <label htmlFor="rate" className='clr-neutral-500 jakarta-600 text-sm'>Mortgage Rate</label>
          <div className='flex mt-1 '>
            <input value={rate} type="number" id='rate' min={0} max={100} className='w-full rounded-l-sm px-3 focus:outline-gray-200' onChange={handleChangeRate} />
            <p className='px-3 py-1 bg-blue-100 rounded-r-sm clr-neutral-500 font-bold'>%</p>
          </div>
        </div>

        {/* TO DO: Fix styling of these checkboxes */}
        <label htmlFor="type1" className="text-neutral-500 font-semibold text-sm">Mortgage Type</label>

        <div className="flex flex-col mt-1 gap-5">
            
            <div className={`py-3 rounded-md border-2 border-gray-300 flex flex-1 items-center p-2 ${check ? 'bg-clr-primary-lime bg-opacity-15 border-clr-primary-lime border-opacity-80' : 'bg-none'} transition-all`}>
              <input
                type="checkbox"
                checked={check}
                id="type1"
                className='hidden'
              />
              <span onClick={handleChangeCheckBox} className={`h-3 w-3 rounded-full inline-block mr-2 border border-gray-300 ${check ? 'bg-clr-primary-lime ring-2 ring-offset-2 ring-clr-primary-lime' : 'bg-white'} transition-colors cursor-pointer ml-2`}
              />
              <p className={`text-neutral-500 font-bold px-3 ${check ? 'text-clr-neutral-700 text-op' : ''}`}>
                Repayment
              </p>
            </div>

            <div className={`py-3 rounded-md border-2 border-gray-300 flex flex-1 items-center p-2 ${check ? 'bg-clr-primary-lime bg-opacity-15 border-clr-primary-lime border-opacity-80' : 'bg-none'} transition-all`}>
              <input
                type="checkbox"
                checked={check}
                id="type1"
                className='hidden'
              />
              <span onClick={handleChangeCheckBox} className={`h-3 w-3 rounded-full inline-block mr-2 border border-gray-300 ${check ? 'bg-clr-primary-lime ring-2 ring-offset-2 ring-clr-primary-lime' : 'bg-white'} transition-colors cursor-pointer ml-2`}
              />
              <p className={`text-neutral-500 font-bold px-3 ${check ? 'text-clr-neutral-700 text-op' : ''}`}>
                Interest Only
              </p>
            </div>
          
        </div>
        
        <Button img='src\assets\images\icon-calculator.svg' text='Calculate Repayments'/>

      </form>
    </section>
  )
}

export default Form