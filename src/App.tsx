import './App.css'
import Form from './ui/Form/Form';
import Results from './ui/Results/Results';

function App() {
  return (
    <main className='flex flex-col md:flex-row jakarta-500'>
      <Form />
      <Results />
    </main>
  );
}

export default App;

