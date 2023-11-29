import {Component} from 'react'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosClose} from 'react-icons/io'
import './index.css'

class Header extends Component {
  state = {click: false}

  getHeader = () => {
    this.setState(prevState => ({
      click: !prevState.click,
    }))
  }

  close = () => {
    this.setState({
      click: false,
    })
  }

  render() {
    const {click} = this.state
    return (
      <>
        <div className="header_container">
          {/* <h1>Header</h1> */}
          <img
            src="https://res.cloudinary.com/dpzv5lbqa/image/upload/v1700648591/COVID19INDIAlogo_1_plye5x.png"
            className="website_logo_image"
            alt="website logo"
          />

          <button className="button1" type="button" onClick={this.getHeader}>
            {/* <h1>one</h1> */}
            <GiHamburgerMenu />
          </button>

          <ul className="unordered_list">
            <Link to="/" className="link1">
              <li className="list_item">Home</li>
            </Link>
            <Link to="/about" className="link1">
              <li className="list_item">About</li>
            </Link>
          </ul>
        </div>
        {click && (
          <ul className="unordered_list1">
            <div className="homeAbout">
              <Link to="/" className="link1">
                <li className="list_item">Home</li>
              </Link>
              <Link to="/about" className="link1">
                <li className="list_item">About</li>
              </Link>
            </div>
            <button className="button1" type="button" onClick={this.close}>
              {/* <h1>one</h1> */}
              <IoIosClose className="close" />
            </button>
          </ul>
        )}
      </>
    )
  }
}
export default Header
