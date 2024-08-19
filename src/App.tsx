import './App.css'
import Form from './ui/Form/Form';
import EmptyResults from './ui/Results/EmptyResults';

function App() {
  return (
    <div className=' bg-clr-neutral-100 h-screen flex justify-center items-center w-full'>
      <main className='bg-white lg:rounded-3xl w-full h-screen lg:h-4/5 lg:w-3/4 flex flex-col lg:flex-row jakarta-500  items-stretch'>
        <Form />
        <EmptyResults />
      </main>
    </div>
  );
}

export default App;

