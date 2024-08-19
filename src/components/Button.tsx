
interface ButtonProps {
  img?: string;
  text: string;
}

const Button = ({ img, text }: ButtonProps) => {


  return (
      <div className='cursor-pointer transition-all hover:bg-opacity-60 flex justify-center gap-3 py-3 bg-clr-primary-lime rounded-3xl'>
        {
          img && <img src={img} alt="Calculator Icon" width={20} height={20} />
        }
        <button 
          className='jakarta-700 clr-neutral-900 opacity-80 text-sm'
        >
          {text}
        </button>        
      </div>
  )
}

export default Button