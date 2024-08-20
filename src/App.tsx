import { useState } from 'react';
import './App.css'
import Form from './ui/Form/Form';
import EmptyResults from './ui/Results/EmptyResults';
import CalcultatedResults from './ui/Results/CalcultatedResults';

function App() {

  const [result, setResults] = useState<string>("")
  const [totalToRepay, setTotalToRepay] = useState("");

  return (
    <div className=' bg-clr-neutral-100 h-screen flex justify-center items-center w-full'>
      <main className='bg-white lg:rounded-3xl w-full h-screen lg:h-auto lg:w-3/4 flex flex-col lg:flex-row jakarta-500  items-stretch'>
        <Form uploadMonthly={setResults} uploadTotal={setTotalToRepay}/>
        
        {
         (result != "" && typeof(result) != 'number')  ? (
           <CalcultatedResults resultData={result} totalRepay={totalToRepay}/>
         ) : (
           <EmptyResults />
         )
        }
      
      </main>
    </div>
  );
}

export default App;

