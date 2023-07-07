import './index.css'

const TabItem = props => {
  const {tabItem, clickTab, isActive} = props
  const {tabId, displayText} = tabItem
  const clickingTab = () => {
    clickTab(tabId)
  }

  const ActiveTab = isActive ? 'active-button' : 'button'

  return (
    <li className="tabList">
      <button type="button" className={ActiveTab} onClick={clickingTab}>
        <p className="tabItem">{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
