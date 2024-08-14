import React, { useState } from 'react'
import Button from '../../components/button'

const Form = () => {

  const [amount, setAmount] = useState<number | string>();
  const [term, setTerm] = useState<number | string>(' ');
  const [rate, setRate] = useState<number | string>(' ');
  const [checkRepayment, setCheckRepayment] = useState(false)
  const [checkInterest, setCheckInterest] = useState(false)

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleChangeTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(Number(e.target.value));
  };

  const handleChangeRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRate(Number(e.target.value));
  };

  const handleChangeCheckBoxRepayment = () => {
    setCheckRepayment(prev => !prev)
  };

  const handleChangeCheckBoxInterest = () => {
    setCheckInterest(prev => !prev)
  };


  return (
    <section className='bg-white w-full p-5 flex flex-col text-left flex-1 md:rounded-3xl md:rounded-tr-none'>
      <h1 className='jakarta-700 text-xl clr-neutral-700'>Mortgage Calculator</h1>
      <p className='text-xs cursor-pointer underline clr-neutral-500 jakarta-600 opacity-70 hover:text-clr-neutral-900 transition-all'>Clear All</p>
      
      <form action='' method='' className='flex flex-col w-full gap-5 mt-5'>
        
        <div >
          <label htmlFor="amount" className='clr-neutral-500 jakarta-600 text-xs'>Mortgage Amount</label>
          <div className=' border-2 border-opacity-0 rounded-sm flex mt-1 hover:border-clr-neutral-300 hover:border-opacity-60 hover:border-2 transition-all'>
            <p className='px-3 py-2 bg-blue-100 rounded-l-sm clr-neutral-500 font-bold'>$</p>
            <input value={amount} type="number" id='amount' min={0} className='text-clr-neutral-700 font-bold focus:outline-none w-full rounded-r-sm px-3' onChange={handleChangeAmount} />
          </div>
        </div>

        <div>
          <label htmlFor="term" className='clr-neutral-500 jakarta-600 text-xs'>Mortgage Term</label>
          <div className='border-2 border-opacity-0 rounded-sm flex mt-1 hover:border-2 hover:border-clr-neutral-300 hover:border-opacity-60  transition-all'>
            <input value={term} type="number" min={0} id='term' className='text-clr-neutral-700 font-bold w-full rounded-l-sm px-3 focus:outline-gray-200' onChange={handleChangeTerm} />
            <p className='px-3 py-2 bg-blue-100 rounded-r-sm clr-neutral-500 font-bold'>years</p>
          </div>
        </div>

        <div>
          <label htmlFor="rate" className='clr-neutral-500 jakarta-600 text-xs'>Mortgage Rate</label>
          <div className='border-2 border-opacity-0 rounded-sm flex mt-1 hover:border-clr-neutral-300 hover:border-opacity-60 hover:border-2 transition-all'>
            <input value={rate} type="number" id='rate' min={0} max={100} className='text-clr-neutral-700 font-bold w-full rounded-l-sm px-3 focus:outline-gray-200' onChange={handleChangeRate} />
            <p className='px-3 py-2 bg-blue-100 rounded-r-sm clr-neutral-500 font-bold'>%</p>
          </div>
        </div>


        <label htmlFor="type1" className="clr-neutral-500 jakarta-600 text-xs">Mortgage Type</label>
        
        <div className="flex flex-col -mt-3 space-y-5">
            <div className={`hover:border-clr-primary-lime hover:border-opacity-60 py-3 rounded-md border-2 border-gray-300 flex flex-1 items-center p-2 ${checkRepayment ? 'bg-clr-primary-lime bg-opacity-15 border-clr-primary-lime border-opacity-80' : 'bg-none'} transition-all`}>
              <input
                type="checkbox"
                checked={checkRepayment}
                id="type1"
                className='hidden'
              />
              <span onClick={handleChangeCheckBoxRepayment} className={`h-3 w-3 rounded-full inline-block mr-2 border border-gray-300 ${checkRepayment ? 'bg-clr-primary-lime ring-2 ring-offset-2 ring-clr-primary-lime' : 'bg-white'} transition-colors cursor-pointer ml-2`}
              />
              <p className='text-clr-neutral-700 font-bold px-3 text-sm'>
                Repayment
              </p>
            </div>

            <div className={`hover:border-clr-primary-lime hover:border-opacity-60 py-3 rounded-md border-2 border-gray-300 flex flex-1 items-center p-2 ${checkInterest ? 'bg-clr-primary-lime bg-opacity-15 border-clr-primary-lime border-opacity-80' : 'bg-none'} transition-all`}>
              <input
                type="checkbox"
                checked={checkInterest}
                id="type1"
                className='hidden'
              />
              <span onClick={handleChangeCheckBoxInterest} className={`h-3 w-3 rounded-full inline-block mr-2 border border-gray-300 ${checkInterest ? 'bg-clr-primary-lime ring-2 ring-offset-2 ring-clr-primary-lime' : 'bg-white'} transition-colors cursor-pointer ml-2`}
              />
              <p className='text-clr-neutral-700 font-bold px-3 text-sm'>
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