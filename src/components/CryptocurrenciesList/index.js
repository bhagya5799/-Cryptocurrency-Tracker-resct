// Write your JS code here
import React, {Component} from 'react'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {
    CryptocurrencyList: [],
  }

  componentDidMount() {
    this.CryptocurrenciesItem()
  }

  CryptocurrenciesItem = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    // console.log(data)
    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    console.log(updatedData)
    this.setState({CryptocurrencyList: updatedData})
    console.log(CryptocurrenciesList)
  }

  render() {
    const {CryptocurrencyList} = this.state
    return (
      <div className="CryptocurrencyTracker-container">
        <h1 className="CryptocurrencyTracker-title"> CryptocurrencyTracker </h1>
        <img
          className="cryptocurrency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          alt="img"
        />
        <div className="cryptoItem-container">
          <nav>
            <h1>Coin Type</h1>
            <div className="usd-euro">
              <h2>USD</h2>
              <h2>EURO</h2>
            </div>
          </nav>
          {CryptocurrencyList.map(eachItem => (
            <CryptocurrencyItem details={eachItem} key={eachItem.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
