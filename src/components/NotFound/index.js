import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './index.css'

class NotFound extends Component {
  getHome = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    return (
      <div className="not1">
        <img
          src="https://res.cloudinary.com/dpzv5lbqa/image/upload/v1701249746/Vectornot1_frnldy.png"
          alt="not found"
          className="not_found"
        />
        <h1>PAGE NOT FOUND!</h1>
        <p>
          we’re sorry, the page you requested could not be found Please go back
          to the homepage
        </p>
        <button className="btn_home" type="button" onClick={this.getHome}>
          Home
        </button>
      </div>
    )
  }
}
export default withRouter(NotFound)
