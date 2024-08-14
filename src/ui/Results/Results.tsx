import React from 'react'

const Results = () => {
  return (
    <section className='bg-clr-neutral-900'>
      <div className='p-10 flex flex-col items-center w-5/6 text-center m-auto'>
        <img src="src\assets\images\illustration-empty.svg" alt="" width={150} />
        <h3 className='text-clr-white text-lg font-semibold'>Results shown here</h3>
        <p className='text-clr-neutral-500 opacity-75 text-sm mt-3'>Compete the form and click 'calculate repayments' to see what your monthly repayments would be</p>
      </div>
    </section>
  )
}

export default Results