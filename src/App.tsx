import './App.css'
import Form from './ui/Form/Form';
import Results from './ui/Results/Results';

function App() {
  return (
    <div className=' bg-clr-neutral-100 h-screen flex justify-center items-center w-full'>
      <main className='bg-white md:rounded-3xl w-full h-screen md:h-4/5 md:w-3/4 flex flex-col md:flex-row jakarta-500 md:justify-center items-stretch'>
        <Form />
        <Results />
      </main>
    </div>
  );
}

export default App;

