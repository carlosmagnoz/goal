import './App.css';
import Login from './Pages/LoginPage/Login';
import { Route, Routes } from 'react-router-dom';
import Main from './Pages/main/Main';
// import Home from './HomePage/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path="/main" element={<Main/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  );
};

export default App;