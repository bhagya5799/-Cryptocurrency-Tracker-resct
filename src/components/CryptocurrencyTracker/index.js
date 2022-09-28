// Write your code here
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {
    Cryptocurrency: true,
  }

  render() {
    const {Cryptocurrency} = this.state
    return (
      <div>
        <CryptocurrenciesList />
      </div>
    )
  }
}

export default CryptocurrencyTracker
