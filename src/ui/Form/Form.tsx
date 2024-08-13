import React from 'react'

const Form = () => {
  return (
    <section className='bg-gray-100 p-5 flex flex-col text-left'>
      <h1 className='jakarta-700 text-2xl clr-neutral-700'>Mortgage Calculator</h1>
      <p className='text-sm cursor-pointer underline clr-neutral-500 jakarta-600 opacity-70'>Clear All</p>
      <form action="" className='flex flex-col w-full gap-5 mt-5'>
        
        <div >
          <label htmlFor="" className='clr-neutral-500 jakarta-600 text-sm'>Mortgage Amount</label>
          <div className='flex mt-1'>
            <p className='px-3 py-1 bg-blue-100 rounded-l-sm clr-neutral-500 font-bold'>$</p>
            <input type="text" className='w-full rounded-r-sm' />
          </div>
        </div>

        <div>
          <label htmlFor="" className='clr-neutral-500 jakarta-600 text-sm'>Mortgage Term</label>
          <div className='flex mt-1'>
            <input type="text" className='w-full rounded-l-sm px-3' />
            <p className='px-3 py-1 bg-blue-100 rounded-r-sm clr-neutral-500 font-bold'>years</p>
          </div>
        </div>

        <div>
          <label htmlFor="" className='clr-neutral-500 jakarta-600 text-sm'>Mortgage Rate</label>
          <div className='flex mt-1 '>
            <input type="text" className='w-full rounded-l-sm px-3' />
            <p className='px-3 py-1 bg-blue-100 rounded-r-sm clr-neutral-500 font-bold'>%</p>
          </div>
        </div>

        {/* TO DO: Fix styling of these checkboxes */}
        <label htmlFor="mortgage" className='text-neutral-500 font-semibold text-sm'>Mortgage Type</label>
        <div className='flex mt-1 items-center px-3 py-1 rounded-sm border border-gray-300 peer-checked:bg-primary-lime peer-checked:border-primary-lime'>
          <input type="checkbox" id="mortgage" className='peer appearance-none h-4 w-4 border border-gray-300 rounded-full checked:bg-neutral-900 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-neutral-700' />
          <p className='px-3 py-1 rounded-r-sm text-neutral-500 font-bold peer-checked:text-neutral-900'>Repayment</p>
        </div>
        <div className='flex mt-1 items-center px-3 py-1 rounded-sm border border-gray-300 peer-checked:bg-primary-lime peer-checked:border-primary-lime'>
          <input type="checkbox" id="mortgage" className='peer appearance-none h-4 w-4 border border-gray-300 rounded-full checked:bg-neutral-900 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-neutral-700' />
          <p className='px-3 py-1 rounded-r-sm text-neutral-500 font-bold peer-checked:text-neutral-900'>Interest Only</p>
        </div>

        <div className='flex justify-center gap-3 py-3 bg-clr-primary-lime rounded-3xl'>
          <img src="src\assets\images\icon-calculator.svg" alt="Calculator Icon" width={20} height={20} />
          <button className='jakarta-700 clr-neutral-900 opacity-80'>Calculate Repayments</button>        
        </div>

      </form>
    </section>
  )
}

export default Form