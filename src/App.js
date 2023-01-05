import React from 'react';
import { ThemeProvider } from '../src/context/ThemeContext';
import { Navbar } from './components/Navbar';
import Home from '../src/routes/Home'
import Singin from '../src/routes/Singin'
import Singup from '../src/routes/Singup'
import Account from '../src/routes/Account'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <ThemeProvider >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Singin />} />
        <Route path='/signup' element={<Singup />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
