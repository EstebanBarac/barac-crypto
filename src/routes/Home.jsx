import React from 'react'
import CoinSearch from '../components/CoinSearch.jsx'

export default function Home({coins}) {
  return (
    <div>
      <CoinSearch coins={coins}/>
    </div>
  )
}
