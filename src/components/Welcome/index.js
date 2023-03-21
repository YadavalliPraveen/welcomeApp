import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onBtnClick = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button
            onClick={this.onBtnClick}
            type="button"
            className="sub-button"
          >
            Subscribe
          </button>
        ) : (
          <button
            onClick={this.onBtnClick}
            type="button"
            className="sub-button"
          >
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
