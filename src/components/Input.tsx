import { useState } from 'react'

interface InputProps {
  changeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void,
  amount: number | string,
  icon: string,
  label: string,
  iconFirst: boolean;
}

const Input = ({ label, amount, icon, changeFunction, iconFirst }: InputProps) => {

  const [focus, setFocus] = useState(false)

  const handleFocus = () => {
    setFocus(true)
  }

  const handleBlur = () => {
    setFocus(false)
  }

  const iconFirstDiv = (
    <div >
      <label htmlFor="amount" className='clr-neutral-500 jakarta-600 text-xs'>{label}</label>
      <div className=' border-2 border-opacity-0 rounded-sm flex mt-1 hover:border-clr-neutral-500 hover:border-opacity-60 hover:border-2 transition-all focus-within:border-clr-primary-lime focus-within:hover:border-clr-primary-lime'>
        <p className={`px-3 py-2 bg-blue-100 ${focus && 'bg-clr-primary-lime text-clr-neutral-700'} rounded-l-xs text-clr-neutral-500 font-bold focus-within:bg-blue-200`}>{icon}</p>
        <input onFocus={handleFocus} onBlur={handleBlur} value={amount} type="number" id='amount' min={0} className='text-clr-neutral-700 font-bold focus:outline-none w-full rounded-r-sm px-3' onChange={changeFunction} />
      </div>
    </div>
  )

  const iconLastDiv = (
    <div >
      <label htmlFor="amount" className='clr-neutral-500 jakarta-600 text-xs'>{label}</label>
      <div className=' border-2 border-opacity-0 rounded-sm flex mt-1 hover:border-clr-neutral-500 hover:border-opacity-60 hover:border-2 transition-all focus-within:border-clr-primary-lime focus-within:hover:border-clr-primary-lime'>
        <input onFocus={handleFocus} onBlur={handleBlur} value={amount} type="number" id='amount' min={0} className='text-clr-neutral-700 font-bold focus:outline-none w-full rounded-r-sm px-3' onChange={changeFunction} />
        <p className={`px-3 py-2 bg-blue-100 ${focus && 'bg-clr-primary-lime text-clr-neutral-700'} rounded-l-xs text-clr-neutral-500 font-bold focus-within:bg-blue-200`}>{icon}</p>
      </div>
    </div>
  )

  return iconFirst ? iconFirstDiv : iconLastDiv;
}

export default Input