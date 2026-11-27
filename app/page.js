'use client'

import { useEffect, useState } from 'react'

const markets = [
  { symbol: 'Volatility 10 (1s) Index', price: '24.391', change: '+1.42%' },
  { symbol: 'Volatility 25 (1s) Index', price: '31.842', change: '-0.38%' },
  { symbol: 'Volatility 50 (1s) Index', price: '68.907', change: '+0.91%' },
]

export default function Home() {
  const [balance, setBalance] = useState('10,000.00')
  const [appId, setAppId] = useState('')
  const [accountMode, setAccountMode] = useState('demo')

  useEffect(() => {
    setAppId(process.env.NEXT_PUBLIC_DERIV_APP_ID || '')
  }, [])

  function login() {
    if (!appId) {
      alert('Add NEXT_PUBLIC_DERIV_APP_ID to your environment variables first.')
      return
    }

    const redirectUri = `${window.location.origin}/api/oauth/callback`
    const url = `https://oauth.deriv.com/oauth2/authorize?app_id=${encodeURIComponent(appId)}&l=EN&brand=deriv&redirect_uri=${encodeURIComponent(redirectUri)}`
    window.location.assign(url)
  }

  return (
    <main>
      <header className="topbar">
        <div className="brand"><span className="brandMark">S</span><div><b>SAVAGE</b><small>TRADER</small></div></div>
        <button className="mode" onClick={() => setAccountMode(accountMode === 'demo' ? 'live' : 'demo')}>
          <span className={accountMode === 'demo' ? 'demoDot' : 'liveDot'} /> {accountMode.toUpper()} 
        </button>
      </header>

      <section className="balanceCard">
        <p>DEMO BALANCE</p>
        <h1>{accountMode === 'demo' ? balance : '— — —'} <small>USD</small></h1>
        <div className="stats">
          <div><span>Today</span><b className="positive">+ $0.00</b></div>
          <div><span>Open trades</span><b>0</b></div>
        </div>
      </section>

      {accountMode === 'live' && (
        <div className="liveWarning">Live mode is locked until risk controls and a professional review are complete.</div>
      )}

      <section>
        <div className="sectionTitle"><h2>Markets</h2><button>View all</button></div>
        <div className="marketList">
          {markets.map((market) => (
            <button className="marketRow" key={market.symbol}>
              <span className="marketIcon">◈</span>
              <span className="marketName"><b>{market.symbol}</b><small>Synthetic</small></span>
              <span className="marketPrice"><b>{market.price}</b><small className={market.change.startsWith('+') ? 'positive' : 'negative'}>{market.change}</small></span>
            </button>
          ))}
        </div>
      </section>

      <button className="primary" onClick={login}>Connect with Deriv</button>

      <nav className="bottomNav" aria-label="Primary navigation">
        <button className="active"><span>⌂</span>Home</button>
        <button><span>⌁</span>Markets</button>
        <button><span>◫</span>Positions</button>
        <button><span>⚙</span>Settings</button>
      </nav>
    </main>
  )
}
