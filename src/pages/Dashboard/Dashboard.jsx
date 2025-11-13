import './Dashboard.css'

function Dashboard() {
  const stats = [
    {
      title: 'Total Properties',
      value: '24',
      icon: '🏢',
      color: 'blue',
      change: '+3 this month'
    },
    {
      title: 'Active Users',
      value: '1,458',
      icon: '👥',
      color: 'teal',
      change: '+125 this week'
    },
    {
      title: 'Total Revenue',
      value: '₹12.5 Cr',
      icon: '💰',
      color: 'green',
      change: '+8.2% growth'
    },
    {
      title: 'Pending Payments',
      value: '₹2.3 Cr',
      icon: '⏳',
      color: 'orange',
      change: '47 pending'
    }
  ]

  const recentActivities = [
    {
      user: 'Rajesh Kumar',
      action: 'Completed payment for Flat A-1203',
      time: '2 hours ago',
      type: 'payment'
    },
    {
      user: 'Priya Sharma',
      action: 'Raised query about construction progress',
      time: '4 hours ago',
      type: 'query'
    },
    {
      user: 'Amit Patel',
      action: 'Downloaded welcome letter',
      time: '6 hours ago',
      type: 'document'
    },
    {
      user: 'Sneha Gupta',
      action: 'Registered for Legacy Heights project',
      time: '1 day ago',
      type: 'registration'
    }
  ]

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard Overview</h1>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card stat-${stat.color}`}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-title">{stat.title}</p>
              <span className="stat-change">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="card recent-activities">
          <h2>Recent Activities</h2>
          <div className="activities-list">
            {recentActivities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-avatar">
                  {activity.user.charAt(0)}
                </div>
                <div className="activity-details">
                  <p className="activity-user">{activity.user}</p>
                  <p className="activity-action">{activity.action}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card construction-status">
          <h2>Construction Progress</h2>
          <div className="progress-item">
            <div className="progress-header">
              <span>Legacy Heights</span>
              <span className="progress-percent">65%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '65%' }}></div>
            </div>
            <p className="progress-status">Super Structure - On Track</p>
          </div>
          
          <div className="progress-item">
            <div className="progress-header">
              <span>Legacy Gardens</span>
              <span className="progress-percent">85%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '85%' }}></div>
            </div>
            <p className="progress-status">Finishing - Ahead of Schedule</p>
          </div>
          
          <div className="progress-item">
            <div className="progress-header">
              <span>Legacy Towers</span>
              <span className="progress-percent">35%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '35%' }}></div>
            </div>
            <p className="progress-status">Foundation - In Progress</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

