import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, imageUrl} = app
  return (
    <div className="eachApp">
      <li className="appList">
        <img src={imageUrl} className="img" alt={appName} />
        <p>{appName}</p>
      </li>
    </div>
  )
}

export default AppItem
