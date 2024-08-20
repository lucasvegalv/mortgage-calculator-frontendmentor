
interface ButtonProps {
  img?: string;
  text: string;
  type: 'button' | 'submit' | 'reset';
}

const Button = ({ img, text, type }: ButtonProps) => {


  return (
      <div className='transition-all hover:bg-opacity-60 flex justify-center gap-3 py-3 bg-clr-primary-lime rounded-3xl'>
        {
          img && <img src={img} alt="Calculator Icon" width={20} height={20} />
        }
        <button 
          type={type}
          className='cursor-pointer jakarta-700 clr-neutral-900 opacity-80 text-sm'
        >
          {text}
        </button>        
      </div>
  )
}

export default Button