import { useState } from 'react'
import './BrokerManagement.css'

function BrokerManagement() {
  const [showBrokerModal, setShowBrokerModal] = useState(false)
  const [selectedBroker, setSelectedBroker] = useState(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)

  const brokers = [
    {
      id: 1,
      name: 'Rohit Mehta',
      email: 'rohit.mehta@broker.com',
      phone: '+91 98765 12345',
      status: 'Active',
      clientsManaged: 15,
      bidsSubmitted: 8,
      successfulDeals: 5,
      poCount: 12,
      commission: '2.5%',
      joinDate: 'Jan 10, 2024',
      performance: 'Excellent'
    },
    {
      id: 2,
      name: 'Kavita Desai',
      email: 'kavita.desai@broker.com',
      phone: '+91 98765 12346',
      status: 'Active',
      clientsManaged: 22,
      bidsSubmitted: 15,
      successfulDeals: 10,
      poCount: 18,
      commission: '3%',
      joinDate: 'Feb 15, 2024',
      performance: 'Outstanding'
    },
    {
      id: 3,
      name: 'Arjun Singh',
      email: 'arjun.singh@broker.com',
      phone: '+91 98765 12347',
      status: 'Active',
      clientsManaged: 8,
      bidsSubmitted: 5,
      successfulDeals: 3,
      poCount: 7,
      commission: '2%',
      joinDate: 'Mar 20, 2024',
      performance: 'Good'
    },
    {
      id: 4,
      name: 'Neha Kapoor',
      email: 'neha.kapoor@broker.com',
      phone: '+91 98765 12348',
      status: 'Inactive',
      clientsManaged: 5,
      bidsSubmitted: 2,
      successfulDeals: 1,
      poCount: 3,
      commission: '2%',
      joinDate: 'Apr 01, 2024',
      performance: 'Average'
    },
    {
      id: 5,
      name: 'Sandeep Rao',
      email: 'sandeep.rao@broker.com',
      phone: '+91 98765 12349',
      status: 'Active',
      clientsManaged: 18,
      bidsSubmitted: 12,
      successfulDeals: 8,
      poCount: 15,
      commission: '2.8%',
      joinDate: 'May 05, 2024',
      performance: 'Excellent'
    }
  ]

  const handleViewDetails = (broker) => {
    setSelectedBroker(broker)
    setShowDetailsModal(true)
  }

  const handleEditBroker = (broker) => {
    setSelectedBroker(broker)
    setShowBrokerModal(true)
  }

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case 'Outstanding':
        return 'perf-outstanding'
      case 'Excellent':
        return 'perf-excellent'
      case 'Good':
        return 'perf-good'
      default:
        return 'perf-average'
    }
  }

  return (
    <div className="broker-management-page">
      <div className="page-header">
        <div>
          <h1 className="page-title-main">Broker Management</h1>
          <p className="page-subtitle">Manage broker accounts and track their performance</p>
        </div>
        <button className="btn btn-primary" onClick={() => { setSelectedBroker(null); setShowBrokerModal(true); }}>
          + Create New Broker
        </button>
      </div>

      {/* Stats Overview */}
      <div className="broker-stats-grid">
        <div className="stat-card-bm">
          <div className="stat-icon-bm">🤝</div>
          <div>
            <h3>Total Brokers</h3>
            <p className="stat-value-bm">87</p>
            <span className="stat-label">+12 this month</span>
          </div>
        </div>
        <div className="stat-card-bm">
          <div className="stat-icon-bm">✅</div>
          <div>
            <h3>Active Brokers</h3>
            <p className="stat-value-bm">73</p>
            <span className="stat-label">84% active rate</span>
          </div>
        </div>
        <div className="stat-card-bm">
          <div className="stat-icon-bm">🎯</div>
          <div>
            <h3>Total Deals</h3>
            <p className="stat-value-bm">452</p>
            <span className="stat-label">This quarter</span>
          </div>
        </div>
        <div className="stat-card-bm">
          <div className="stat-icon-bm">📋</div>
          <div>
            <h3>Purchase Orders</h3>
            <p className="stat-value-bm">684</p>
            <span className="stat-label">Total POs</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card filters-section">
        <div className="filters-grid">
          <input 
            type="text" 
            placeholder="Search by broker name or email..." 
            className="search-input-full"
          />
          <select className="filter-select">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <select className="filter-select">
            <option>Performance</option>
            <option>Outstanding</option>
            <option>Excellent</option>
            <option>Good</option>
            <option>Average</option>
          </select>
          <select className="filter-select">
            <option>Sort By</option>
            <option>Most Deals</option>
            <option>Most Clients</option>
            <option>Newest First</option>
          </select>
        </div>
      </div>

      {/* Brokers Table */}
      <div className="card brokers-table-card">
        <table className="brokers-table-bm">
          <thead>
            <tr>
              <th>Broker Details</th>
              <th>Contact</th>
              <th>Status</th>
              <th>Clients</th>
              <th>Bids / Deals</th>
              <th>PO Count</th>
              <th>Commission</th>
              <th>Performance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {brokers.map((broker) => (
              <tr key={broker.id}>
                <td>
                  <div className="broker-cell-bm">
                    <div className="broker-avatar-bm">
                      {broker.name.charAt(0)}
                    </div>
                    <div>
                      <div className="broker-name-bm">{broker.name}</div>
                      <div className="broker-meta">Joined: {broker.joinDate}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="contact-info-bm">
                    <div>{broker.email}</div>
                    <div className="broker-meta">{broker.phone}</div>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${broker.status === 'Active' ? 'status-success' : 'status-error'}`}>
                    {broker.status}
                  </span>
                </td>
                <td>
                  <span className="metric-value">{broker.clientsManaged}</span>
                </td>
                <td>
                  <div className="bids-deals">
                    <span className="metric-value">{broker.bidsSubmitted}</span>
                    <span className="separator">/</span>
                    <span className="metric-value success">{broker.successfulDeals}</span>
                  </div>
                </td>
                <td>
                  <span className="metric-value">{broker.poCount}</span>
                </td>
                <td>
                  <span className="commission-badge">{broker.commission}</span>
                </td>
                <td>
                  <span className={`performance-badge ${getPerformanceColor(broker.performance)}`}>
                    {broker.performance}
                  </span>
                </td>
                <td>
                  <div className="action-buttons-bm">
                    <button 
                      className="action-btn-bm" 
                      title="View Details"
                      onClick={() => handleViewDetails(broker)}
                    >
                      👁️
                    </button>
                    <button 
                      className="action-btn-bm" 
                      title="Edit Broker"
                      onClick={() => handleEditBroker(broker)}
                    >
                      ✏️
                    </button>
                    <button className="action-btn-bm" title="Assign Clients">👥</button>
                    <button className="action-btn-bm" title="View Documents">📄</button>
                    <button className="action-btn-bm" title="Reset Password">🔑</button>
                    <button className="action-btn-bm" title="More Options">⋮</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile Card View */}
        {brokers.map((broker) => (
          <div key={broker.id} className="broker-card-mobile">
            <div className="broker-card-header">
              <div className="broker-cell-bm">
                <div className="broker-avatar-bm">
                  {broker.name.charAt(0)}
                </div>
                <div>
                  <div className="broker-name-bm">{broker.name}</div>
                  <div className="broker-meta">{broker.email}</div>
                </div>
              </div>
              <span className={`status-badge ${broker.status === 'Active' ? 'status-success' : 'status-error'}`}>
                {broker.status}
              </span>
            </div>
            
            <div className="broker-card-body">
              <div className="card-info-row">
                <span className="card-label">📞 Phone:</span>
                <span>{broker.phone}</span>
              </div>
              <div className="card-info-row">
                <span className="card-label">👥 Clients:</span>
                <span className="metric-value">{broker.clientsManaged}</span>
              </div>
              <div className="card-info-row">
                <span className="card-label">🎯 Bids / Deals:</span>
                <span>
                  <span className="metric-value">{broker.bidsSubmitted}</span> / <span className="metric-value success">{broker.successfulDeals}</span>
                </span>
              </div>
              <div className="card-info-row">
                <span className="card-label">📋 PO Count:</span>
                <span className="metric-value">{broker.poCount}</span>
              </div>
              <div className="card-info-row">
                <span className="card-label">💰 Commission:</span>
                <span className="commission-badge">{broker.commission}</span>
              </div>
              <div className="card-info-row">
                <span className="card-label">⭐ Performance:</span>
                <span className={`performance-badge ${getPerformanceColor(broker.performance)}`}>
                  {broker.performance}
                </span>
              </div>
            </div>

            <div className="broker-card-actions">
              <button 
                className="btn btn-outline"
                onClick={() => handleViewDetails(broker)}
              >
                View Details
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => handleEditBroker(broker)}
              >
                Edit Broker
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Broker Details Modal */}
      {showDetailsModal && selectedBroker && (
        <div className="modal-overlay" onClick={() => setShowDetailsModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Broker Profile Details</h2>
              <button className="close-btn" onClick={() => setShowDetailsModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="broker-profile-section">
                <div className="profile-avatar-large">
                  {selectedBroker.name.charAt(0)}
                </div>
                <h3>{selectedBroker.name}</h3>
                <span className={`status-badge ${selectedBroker.status === 'Active' ? 'status-success' : 'status-error'}`}>
                  {selectedBroker.status}
                </span>
                <span className={`performance-badge ${getPerformanceColor(selectedBroker.performance)}`}>
                  {selectedBroker.performance}
                </span>
              </div>

              <div className="details-section">
                <h4>Contact Information</h4>
                <div className="details-grid">
                  <div className="detail-item">
                    <label>Email</label>
                    <p>{selectedBroker.email}</p>
                  </div>
                  <div className="detail-item">
                    <label>Phone</label>
                    <p>{selectedBroker.phone}</p>
                  </div>
                </div>
              </div>

              <div className="details-section">
                <h4>Performance Metrics</h4>
                <div className="details-grid">
                  <div className="detail-item">
                    <label>Clients Managed</label>
                    <p>{selectedBroker.clientsManaged}</p>
                  </div>
                  <div className="detail-item">
                    <label>Bids Submitted</label>
                    <p>{selectedBroker.bidsSubmitted}</p>
                  </div>
                  <div className="detail-item">
                    <label>Successful Deals</label>
                    <p>{selectedBroker.successfulDeals}</p>
                  </div>
                  <div className="detail-item">
                    <label>Purchase Orders</label>
                    <p>{selectedBroker.poCount}</p>
                  </div>
                  <div className="detail-item">
                    <label>Commission Rate</label>
                    <p>{selectedBroker.commission}</p>
                  </div>
                  <div className="detail-item">
                    <label>Join Date</label>
                    <p>{selectedBroker.joinDate}</p>
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <button className="btn btn-outline" onClick={() => setShowDetailsModal(false)}>Close</button>
                <button className="btn btn-primary" onClick={() => { setShowDetailsModal(false); handleEditBroker(selectedBroker); }}>Edit Broker</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create/Edit Broker Modal */}
      {showBrokerModal && (
        <div className="modal-overlay" onClick={() => setShowBrokerModal(false)}>
          <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedBroker ? 'Edit Broker' : 'Create New Broker'}</h2>
              <button className="close-btn" onClick={() => setShowBrokerModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <form className="broker-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Enter full name" defaultValue={selectedBroker?.name} />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" placeholder="Enter email" defaultValue={selectedBroker?.email} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="Enter phone number" defaultValue={selectedBroker?.phone} />
                  </div>
                  <div className="form-group">
                    <label>Status</label>
                    <select defaultValue={selectedBroker?.status || 'Active'}>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Commission Rate (%)</label>
                    <input type="text" placeholder="e.g., 2.5" defaultValue={selectedBroker?.commission} />
                  </div>
                  <div className="form-group">
                    <label>Performance Rating</label>
                    <select defaultValue={selectedBroker?.performance}>
                      <option>Outstanding</option>
                      <option>Excellent</option>
                      <option>Good</option>
                      <option>Average</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Assign to Clients (Optional)</label>
                  <select multiple>
                    <option>Rajesh Kumar - Legacy Heights</option>
                    <option>Priya Sharma - Legacy Gardens</option>
                    <option>Amit Patel - Legacy Towers</option>
                  </select>
                  <small>Hold Ctrl/Cmd to select multiple</small>
                </div>

                <div className="form-group">
                  <label>Notes</label>
                  <textarea rows="3" placeholder="Add any additional notes or comments"></textarea>
                </div>

                {!selectedBroker && (
                  <div className="form-row">
                    <div className="form-group">
                      <label>Password *</label>
                      <input type="password" placeholder="Enter password" />
                    </div>
                    <div className="form-group">
                      <label>Confirm Password *</label>
                      <input type="password" placeholder="Confirm password" />
                    </div>
                  </div>
                )}

                <div className="form-actions">
                  <button type="button" className="btn btn-outline" onClick={() => setShowBrokerModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary">
                    {selectedBroker ? 'Update Broker' : 'Create Broker'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BrokerManagement

