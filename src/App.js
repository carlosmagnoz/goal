import './App.css';
import Login from './Pages/LoginPage/Login';
import { Route, Routes } from 'react-router-dom';
import Main from './Pages/main/Main';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Main" element={<Main/>}/>
    </Routes>
    </>
  );
};

export default App;