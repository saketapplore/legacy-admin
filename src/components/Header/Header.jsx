import './Header.css'
import { Menu, Search, Bell } from 'lucide-react'

function Header({ onMenuClick }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button className="menu-toggle" onClick={onMenuClick}>
            <Menu size={20} />
          </button>
          <h1 className="page-title">Legacy Admin</h1>
        </div>
        
        <div className="header-right">
          <button className="search-btn-mobile">
            <Search size={18} />
          </button>
          
          <button className="notification-btn">
            <Bell size={18} />
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

