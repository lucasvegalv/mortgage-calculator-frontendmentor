const EmptyResults = () => {
  return (
    <section className='flex-1 bg-clr-neutral-900 lg:rounded-tl-none lg:rounded-3xl lg:rounded-bl-7xl flex flex-col justify-center'>
      <div className='p-10 flex flex-col items-center w-5/6 text-center m-auto'>
        <img src="src\assets\images\illustration-empty.svg" alt="" width={150} />
        <h3 className='text-clr-white text-base font-semibold'>Results shown here</h3>
        <p className='text-xs text-clr-neutral-500 opacity-75 mt-3'>Compete the form and click 'calculate repayments' to see what your monthly repayments would be</p>
      </div>
    </section>
  )
}

export default EmptyResults