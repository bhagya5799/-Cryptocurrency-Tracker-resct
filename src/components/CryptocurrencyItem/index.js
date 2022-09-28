// Write your JS code here
import React from 'react'
import './index.css'

const CryptocurrencyItem = props => {
  const details = props
  const {currencyName, usdValue, euroValue, currencyLogo} = details
  return (
    <div className="CryptocurrencyItem-container">
      <div>
        <img src={currencyLogo} />
        <h1>{currencyName}</h1>
      </div>
      <div>
        <p>ll</p>
        <p>ll</p>
      </div>
    </div>
  )
}
export default CryptocurrencyItem
