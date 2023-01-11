import React from 'react'
import CoinSearch from '../components/CoinSearch.jsx'
import Trending from '../components/Trending';

export default function Home({coins}) {
  return (
    <div>
      <CoinSearch coins={coins}/>
      <Trending />
    </div>
  )
}
