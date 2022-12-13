import './App.css';
import Login from './Pages/LoginPage/Login';
import { Route, Routes } from 'react-router-dom';
import Main from './Pages/main/Main';
import ErroPage from './Pages/Error';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Main" element={<Main/>}/>
      <Route path="*" element={<ErroPage/>}/>
     </Routes>
    </>
  );
};

export default App;