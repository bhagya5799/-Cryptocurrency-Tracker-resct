// Write your JS code here
import React, {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {
    CryptocurrencyList: [],
    isCryptocurrency: true,
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
    this.setState({CryptocurrencyList: updatedData, isCryptocurrency: false})
    console.log(CryptocurrenciesList)
  }

  render() {
    const {CryptocurrencyList, isCryptocurrency} = this.state
    return (
      <div className="CryptocurrencyTracker-container">
        <h1 className="CryptocurrencyTracker-title">Cryptocurrency Tracker</h1>
        <img
          className="cryptocurrency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          alt="cryptocurrency"
        />
        {isCryptocurrency ? (
          <div>
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            {' '}
            <div className="cryptoItem-container">
              <nav>
                <h1>Coin Type</h1>
                <div className="usd-euro">
                  <h2>USD</h2>
                  <h2>EURO</h2>
                </div>
              </nav>
              <ul>
                {CryptocurrencyList.map(eachItem => (
                  <CryptocurrencyItem details={eachItem} key={eachItem.id} />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
