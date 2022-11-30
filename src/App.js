import './App.css';
import CFitness from './Components/Cards/CFitness';
import CFodd from './Components/Cards/CFood';
import CSchool from './Components/Cards/CSchool';
import CSocial from './Components/Cards/CSocial';
import Ctask from './Components/Cards/Ctask';
import CWork from './Components/Cards/CWork';

function App() {
  return (
    <>
    <h1 className='Title'>Goal</h1>
    <Ctask/>
    <CFitness/>
    <CWork/>
    <CFodd/>
    <CSocial/>
    <CSchool/>
    </>
  );
};

export default App;