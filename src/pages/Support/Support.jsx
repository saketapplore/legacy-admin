import './Support.css'

function Support() {
  const queries = [
    {
      id: 'QRY-001',
      user: 'Rajesh Kumar',
      property: 'Legacy Heights - A-1203',
      subject: 'Construction progress update needed',
      status: 'Open',
      priority: 'High',
      date: 'Nov 13, 2024',
      category: 'Construction'
    },
    {
      id: 'QRY-002',
      user: 'Priya Sharma',
      property: 'Legacy Gardens - B-402',
      subject: 'Payment receipt not received',
      status: 'In Progress',
      priority: 'Medium',
      date: 'Nov 12, 2024',
      category: 'Payment'
    },
    {
      id: 'QRY-003',
      user: 'Amit Patel',
      property: 'Legacy Towers - C-805',
      subject: 'Floor plan clarification',
      status: 'Resolved',
      priority: 'Low',
      date: 'Nov 10, 2024',
      category: 'Documentation'
    },
    {
      id: 'QRY-004',
      user: 'Sneha Gupta',
      property: 'Legacy Heights - A-1501',
      subject: 'Expected delivery date confirmation',
      status: 'Open',
      priority: 'High',
      date: 'Nov 11, 2024',
      category: 'General'
    },
    {
      id: 'QRY-005',
      user: 'Vikram Singh',
      property: 'Legacy Gardens - D-302',
      subject: 'Parking slot allocation query',
      status: 'In Progress',
      priority: 'Medium',
      date: 'Nov 09, 2024',
      category: 'Facilities'
    }
  ]

  const getStatusClass = (status) => {
    switch (status) {
      case 'Open':
        return 'status-warning'
      case 'In Progress':
        return 'status-info'
      case 'Resolved':
        return 'status-success'
      default:
        return ''
    }
  }

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High':
        return 'priority-high'
      case 'Medium':
        return 'priority-medium'
      case 'Low':
        return 'priority-low'
      default:
        return ''
    }
  }

  return (
    <div className="support-page">
      <div className="page-header">
        <h1 className="page-title-white">Support & Queries</h1>
      </div>

      <div className="support-stats">
        <div className="support-stat-card card">
          <div className="support-stat-icon">📥</div>
          <div>
            <h3>Total Queries</h3>
            <p className="support-stat-value">156</p>
          </div>
        </div>
        <div className="support-stat-card card">
          <div className="support-stat-icon">⏳</div>
          <div>
            <h3>Open Queries</h3>
            <p className="support-stat-value">32</p>
          </div>
        </div>
        <div className="support-stat-card card">
          <div className="support-stat-icon">🔄</div>
          <div>
            <h3>In Progress</h3>
            <p className="support-stat-value">18</p>
          </div>
        </div>
        <div className="support-stat-card card">
          <div className="support-stat-icon">✅</div>
          <div>
            <h3>Resolved</h3>
            <p className="support-stat-value">106</p>
          </div>
        </div>
      </div>

      <div className="card queries-table-container">
        <table className="queries-table">
          <thead>
            <tr>
              <th>Query ID</th>
              <th>User</th>
              <th>Property</th>
              <th>Subject</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {queries.map((query) => (
              <tr key={query.id}>
                <td className="query-id">{query.id}</td>
                <td>{query.user}</td>
                <td>{query.property}</td>
                <td className="query-subject">{query.subject}</td>
                <td>{query.category}</td>
                <td>
                  <span className={`priority-badge ${getPriorityClass(query.priority)}`}>
                    {query.priority}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${getStatusClass(query.status)}`}>
                    {query.status}
                  </span>
                </td>
                <td>{query.date}</td>
                <td>
                  <div className="table-actions">
                    <button className="action-btn">👁️</button>
                    <button className="action-btn">💬</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Support

