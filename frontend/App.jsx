import React from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import { ThemeProvider, Paper } from '@mui/material';


const App = () => {
  // const theme1 = ThemeProvider({
  //   palatte: {
  //     primary: {
  //       main: 'white',
  //     },
  //   },
  // });
  
  return (
    
    <>
    <Routes>
        <Route path='/messenger/login' element={<Login />}></Route>
        <Route path='/messenger/register' element={<Register />} ></Route>
    </Routes>
    </>
    
   
  );
};
export default App;
