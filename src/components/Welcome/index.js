import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thankyou! Happy Learning</p>
        <div>
          <button type="button" className="button" onClick={this.onSubscribe}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
