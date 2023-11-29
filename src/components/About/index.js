import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

class About extends Component {
  state = {progress: true, listfaqs: []}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const url = 'https://apis.ccbp.in/covid19-faqs'
    const response = await fetch(url)
    if (response.ok === true) {
      const data23 = await response.json()
      console.log(data23)
      this.setState({
        progress: false,
        listfaqs: data23,
      })
    }
  }

  getFaq = each => {
    const {answer, question} = each
    console.log(answer)
    return (
      <div>
        <p className="para12">{question}</p>
        <p className="answer">{answer}</p>
      </div>
    )
  }

  renderProgress = () => (
    <div className="loader">
      <Loader type="Oval" color="white" height={50} width={50} />
    </div>
  )

  renderSuccess = () => {
    const {listfaqs} = this.state
    console.log(listfaqs)
    const list3 = listfaqs.faq

    return <>{list3.map(each => this.getFaq(each))}</>
  }

  render() {
    const {progress} = this.state
    return (
      <div className="Home_Container">
        <Header />

        <div className="about12">
          <h1 className="about">About</h1>
          <p className="para12">Last Updated on march 28th,2021</p>
          <p className="para12">Covid 19 vaccines be ready for Distribution</p>
          {progress === true ? (
            <>{this.renderProgress()}</>
          ) : (
            <>{this.renderSuccess()}</>
          )}
        </div>
        <div className="footer1">
          <Footer />
        </div>
      </div>
    )
  }
}
export default About
