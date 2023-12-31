import {Component} from 'react'
import './index.css'

class IndianStats extends Component {
  getData2 = () => {
    const {listStats, statesList, getActive, active} = this.props
    let className12 = ''
    if (active === 'confirmed') {
      className12 = 'confirm1'
    } else if (active === 'recovered') {
      className12 = 'recover1'
    } else if (active === 'deceased') {
      className12 = 'deceased1'
    } else if (active === 'active1') {
      className12 = 'active12'
    }

    console.log(listStats)
    let totalDeceased = 0
    let totalConfirmed = 0
    let totalRecovered = 0

    let activeCases = 0
    statesList.forEach(eachState => {
      if (listStats[eachState.state_code]) {
        const {total} = listStats[eachState.state_code]
        //   const {meta} = listStats[eachState.state_code]
        totalDeceased += total.deceased
        totalConfirmed += total.confirmed
        totalRecovered += total.recovered
      } else {
        totalConfirmed = listStats.total.confirmed
        totalRecovered = listStats.total.recovered
        totalDeceased = listStats.total.deceased
      }
    })

    //   totalConfirmed = listStats.total.confirmed
    //   totalRecovered = listStats.total.recovered
    //   console.log(totalConfirmed)

    activeCases += totalConfirmed - (totalRecovered + totalDeceased)

    const getConfirm = () => {
      getActive('confirmed')
    }

    //   const getActive1 = () => {
    //     getActive('recovered')
    //   }

    const getRecovered = () => {
      getActive('recovered')
    }
    const getDeceased = () => {
      getActive('deceased')
    }

    const getActive1 = () => {
      getActive('active1')
    }

    return (
      <div className="indianStatsContainer">
        {active === 'confirmed' ? (
          <button
            className={`container12 ${className12}`}
            type="button"
            onClick={getConfirm}
          >
            <p>Confirmed</p>
            <img
              src="https://res.cloudinary.com/dpzv5lbqa/image/upload/v1700652919/check-mark_1confirmed_1_pja2e3.png"
              className="img1"
              alt="confirmed"
            />
            <p>{totalConfirmed}</p>
          </button>
        ) : (
          <button className="container12" type="button" onClick={getConfirm}>
            <p>Confirmed</p>
            <img
              src="https://res.cloudinary.com/dpzv5lbqa/image/upload/v1700652919/check-mark_1confirmed_1_pja2e3.png"
              className="img1"
              alt="confirmed"
            />
            <p>{totalConfirmed}</p>
          </button>
        )}
        {active === 'active1' ? (
          <button
            className={`container2 ${className12}`}
            type="button"
            onClick={getActive1}
          >
            <p>Active</p>
            <img
              src="https://res.cloudinary.com/dpzv5lbqa/image/upload/v1700653176/protection_1Active_1_uxjfcw.png"
              className="img1"
              alt="active"
            />
            <p>{activeCases}</p>
          </button>
        ) : (
          <button className="container2" type="button" onClick={getActive1}>
            <p>Active</p>
            <img
              src="https://res.cloudinary.com/dpzv5lbqa/image/upload/v1700653176/protection_1Active_1_uxjfcw.png"
              className="img1"
              alt="active"
            />
            <p>{activeCases}</p>
          </button>
        )}

        {active === 'recovered' ? (
          <button
            className={`container3 ${className12}`}
            type="button"
            onClick={getRecovered}
          >
            <p>Recovered</p>
            <img
              src="https://res.cloudinary.com/dpzv5lbqa/image/upload/v1700653502/recovered_1Recovred_bjulok.png"
              className="img1"
              alt="recovered"
            />
            <p>{totalRecovered}</p>
          </button>
        ) : (
          <button className="container3" type="button" onClick={getRecovered}>
            <p>Recovered</p>
            <img
              src="https://res.cloudinary.com/dpzv5lbqa/image/upload/v1700653502/recovered_1Recovred_bjulok.png"
              className="img1"
              alt="recovered"
            />
            <p>{totalRecovered}</p>
          </button>
        )}
        {active === 'deceased' ? (
          <button
            className={`container4 ${className12}`}
            type="button"
            onClick={getDeceased}
          >
            <p>Decreased</p>
            <img
              src="https://res.cloudinary.com/dpzv5lbqa/image/upload/v1700653574/breathing_1Decreased_kumxvu.png"
              className="img1"
              alt="decreased"
            />
            <p>{totalDeceased}</p>
          </button>
        ) : (
          <button className="container4" type="button" onClick={getDeceased}>
            <p>Decreased</p>
            <img
              src="https://res.cloudinary.com/dpzv5lbqa/image/upload/v1700653574/breathing_1Decreased_kumxvu.png"
              className="img1"
              alt="decreased"
            />
            <p>{totalDeceased}</p>
          </button>
        )}
      </div>
    )
  }

  render() {
    return <>{this.getData2()}</>
  }
}

export default IndianStats
