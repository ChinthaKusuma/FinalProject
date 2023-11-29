import './index.css'

const EachStats = props => {
  const {item} = props
  const {stateName, confirmed, recovered, deceased, population} = item
  const active = confirmed - recovered - deceased
  return (
    <ul className="row_container">
      <li className="cell_container2">{stateName}</li>
      <li className="cell_container1 color111">{confirmed}</li>
      <li className="cell_container1 color21">{active}</li>
      <li className="cell_container1 color31">{recovered}</li>
      <li className="cell_container1 color11">{deceased}</li>
      <li className="cell_container1 color11">{population}</li>
    </ul>
  )
}
export default EachStats
