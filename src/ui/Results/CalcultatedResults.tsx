interface CalcultatedResultsProps {
  resultData: string;
  totalRepay: string;
}


const CalcultatedResults = ( { resultData, totalRepay }: CalcultatedResultsProps ) => {

  return (
    <section className='flex-1 bg-clr-neutral-900 lg:rounded-tl-none lg:rounded-3xl lg:rounded-bl-7xl flex flex-col p-5'>
      <div className='flex flex-col w-full text-left space-y-4'>
        <h3 className='text-clr-white text-base font-semibold'>Your results</h3>
        <p className='text-xs text-clr-neutral-500 opacity-75 mt-3'>Your results are shown below based on the information you provided. to adjust the results, edit the form and click "calculate repayments" again.</p>

        <div className="flex flex-col justify-between h-full border-t-2 rounded-md border-t-clr-primary-lime w-full p-5" style={{backgroundColor: 'hsl(205, 38%, 13%)'}}>
          <p className="text-xs text-clr-neutral-500 mb-2">Your monthly repayments</p>
          <h2 className="mb-6 jakarta-700 text-clr-primary-lime text-4xl">{resultData}</h2>
          <div className="w-full h-[0.5px] bg-clr-neutral-300 rounded-lg bg-opacity-30"></div>
            <p className="mt-6 mb-1 text-xs text-clr-neutral-500">Total you'll repay over the term</p>
            <h3 className="text-clr-white text-base font-semibold">{totalRepay}</h3>
        </div>

      </div>
    </section>
  )
}

export default CalcultatedResults