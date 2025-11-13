import './Header.css'

function Header({ onMenuClick }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button className="menu-toggle" onClick={onMenuClick}>☰</button>
          <h1 className="page-title">Legacy Admin</h1>
        </div>
        
        <div className="header-right">
          <button className="search-btn-mobile">
            <span className="search-icon">🔍</span>
          </button>
          
          <button className="notification-btn">
            <span className="bell-icon">🔔</span>
            <span className="notification-badge">3</span>
          </button>
          
          <div className="user-profile">
            <div className="user-avatar">A</div>
            <div className="user-info">
              <span className="user-name">Admin</span>
              <span className="user-role">Administrator</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

