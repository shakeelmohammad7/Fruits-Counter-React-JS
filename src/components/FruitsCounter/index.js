// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  onIncrementMangoCount = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  onIncrementBananaCount = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">
            Bob ate <span className="count">{mangoesCount} </span> mangoes{' '}
            <span className="count">{bananasCount} </span> bananas
          </h1>
          <div className="fruits-container">
            <div className="small-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango pic"
              />
              <button
                type="button"
                className="btn"
                onClick={this.onIncrementMangoCount}
              >
                Eat Mango
              </button>
            </div>
            <div className="small-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana pic"
              />
              <button
                type="button"
                className="btn"
                onClick={this.onIncrementBananaCount}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
