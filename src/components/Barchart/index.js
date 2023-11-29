import {Component, React} from 'react'

import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  BarChart,
  Bar,
} from 'recharts'

import './index.css'

const data = [
  {date: '23-02-2017', count: 200},
  {date: '24-02-2017', count: 400},
  {date: '23-02-2017', count: 100},
  {date: '23-02-2017', count: 200},
  {date: '24-02-2017', count: 300},
  {date: '23-02-2017', count: 200},
  {date: '24-02-2017', count: 400},
  {date: '23-02-2017', count: 600},
]

class Barchart extends Component {
  state = {listBar: [], timeChart: []}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const {code, active} = this.props
    console.log(active)

    const url = `https://apis.ccbp.in/covid19-timelines-data/${code}`
    const response = await fetch(url)
    const data1 = await response.json()
    console.log('one')
    console.log(data1)
    const specific = data1[code].dates

    const keys = Object.keys(specific)
    const sortedKeys = keys.sort((a, b) => (a > b ? -1 : 1))
    const range = sortedKeys.slice(1, 11)

    if (response.ok === true) {
      const data2 = range.map(each => ({
        date: each,
        confirmed: specific[each].total.confirmed,
        recovered: specific[each].total.recovered,
        deceased: specific[each].total.deceased,
        active1:
          specific[each].total.confirmed -
          specific[each].total.recovered -
          specific[each].total.deceased,
        //   specific[each].total.confirmed -
        //   districts[each].total.recovered -
        //   districts[each].total.deceased,
      }))
      const data3 = keys.map(each => ({
        date: each,
        confirmed: specific[each].total.confirmed,
        recovered: specific[each].total.recovered,
        deceased: specific[each].total.deceased,
        tested: specific[each].total.tested,
        active1:
          specific[each].total.confirmed -
          specific[each].total.recovered -
          specific[each].total.deceased,
        //   specific[each].total.confirmed -
        //   districts[each].total.recovered -
        //   districts[each].total.deceased,
      }))

      console.log(data1)
      this.setState({
        listBar: data2,
        timeChart: data3,
      })
    }
  }

  getChart1 = (active, color) => {
    const {timeChart} = this.state
    // const list3 = timeChart.map(each => ({
    //   date: each,
    //   result: each[active],
    // }))
    let className1 = ''
    if (active === 'confirmed') {
      className1 = 'class_confirmed'
    } else if (active === 'active1') {
      className1 = 'class_active'
    } else if (active === 'recovered') {
      className1 = 'class_recovered'
    } else if (active === 'deceased') {
      className1 = 'class_deceased'
    } else if (active === 'tested') {
      className1 = 'class_tested'
    }
    return (
      <>
        <div className="trend1">
          <div className={`App ${className1}`}>
            <LineChart
              width={730}
              height={250}
              data={timeChart}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="date" dy={5} stroke={color} />
              <YAxis stroke={color} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey={active} stroke={color} />
            </LineChart>
          </div>
        </div>
        <div className="trend2">
          <div className={`App ${className1}`}>
            <LineChart
              width={250}
              height={200}
              data={timeChart}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="date" dy={5} stroke={color} />
              <YAxis stroke={color} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey={active} stroke={color} />
            </LineChart>
          </div>
        </div>
      </>
    )
  }

  getBarchart = () => {
    const {listBar, timeChart} = this.state
    console.log(timeChart)
    console.log(listBar)
    const {active} = this.props
    // console.log(listBar)
    // const list2 = listBar.map(each => each.total[active])
    // console.log(list2)

    let barColor = '#FF073A'
    if (active === 'confirmed') {
      barColor = '#FF073A'
    } else if (active === 'recovered') {
      barColor = '#28A745'
    } else if (active === 'deceased') {
      barColor = '#6C757D'
    } else if (active === 'active1') {
      barColor = '#007BFF'
    }

    return (
      <>
        <div className="bar12">
          <BarChart
            width={800}
            height={450}
            data={listBar}
            barWidth={35}
            margin={{
              left: 20,
              right: 30,
              top: 5,
              bottom: 5,
            }}
            fontSize={13}
          >
            {/* <CartesianGrid strokeDasharray="" /> */}
            <XAxis
              dataKey="date"
              stroke={`${barColor}`}
              axisLine={false}
              interval={0}
              tickLine={0}
              strokeWidth={1}
              fontSize={13}
            />

            <Tooltip />
            <Legend />
            <Bar
              dataKey={active}
              fill={barColor}
              className="bar"
              label={{position: 'top', fill: `${barColor}`}}
              radius={[8, 8, 0, 0]}
              margin={{
                left: 50,
                right: 50,
              }}
            />
          </BarChart>
        </div>
        <div className="bar2">
          <BarChart
            width={300}
            height={300}
            data={listBar}
            barWidth={35}
            margin={{
              left: 20,
              right: 30,
              top: 5,
              bottom: 5,
            }}
            fontSize={5}
          >
            {/* <CartesianGrid strokeDasharray="" /> */}
            <XAxis
              dataKey="date"
              stroke={`${barColor}`}
              axisLine={false}
              interval={0}
              tickLine={0}
              strokeWidth={1}
              fontSize={5}
            />

            <Tooltip />
            <Legend />
            <Bar
              dataKey={active}
              fill={barColor}
              className="bar"
              interval={0}
              label={{position: 'top', fill: `${barColor}`}}
              radius={[8, 8, 0, 0]}
              margin={{
                left: 50,
                right: 50,
              }}
              fontSize={5}
            />
          </BarChart>
        </div>

        <h1 className="h1234">Daily Spread Trends</h1>

        <div>{this.getChart1('confirmed', '#FF073A')}</div>
        <div>{this.getChart1('active1', '#007BFF')}</div>
        <div>{this.getChart1('recovered', '#28A745')}</div>
        <div>{this.getChart1('deceased', '#6C757D')}</div>
        <div>{this.getChart1('tested', '#9673B9')}</div>
      </>
    )
  }

  render() {
    return <>{this.getBarchart()}</>
  }
}
export default Barchart
