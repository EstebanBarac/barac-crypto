import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '../src/context/ThemeContext';
import { Navbar } from './components/Navbar';
import Home from '../src/routes/Home';
import Singin from '../src/routes/Singin';
import Singup from '../src/routes/Singup';
import Account from '../src/routes/Account';
import CoinPage from './components/CoinPage';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';


function App() {
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=true';

  useEffect(()=> {
    axios.get(url).then((response)=> {
      setCoins(response.data);
    })
  },[url])

  return (
    <ThemeProvider >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home coins={coins} />} />
        <Route path='/signin' element={<Singin />} />
        <Route path='/signup' element={<Singup />} />
        <Route path='/account' element={<Account />} />
        <Route path='/coin/:coinId' element={<CoinPage />}>
            <Route path=':coinId' />
        </Route> 
      </Routes>
    </ThemeProvider>
  );
}

export default App;
