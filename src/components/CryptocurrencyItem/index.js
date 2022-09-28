// Write your JS code here
import React from 'react'
import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {
    currencyName,
    usdValue,
    euroValue,
    currencyLogo,
    isCryptocurrency,
  } = details
  console.log(isCryptocurrency)
  return (
    <li className="CryptocurrencyItem-container">
      <div className="logo-coinName-container">
        <img src={currencyLogo} className="bit-coin-logo" alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="curency-container">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
