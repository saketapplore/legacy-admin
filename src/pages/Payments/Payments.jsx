import './Payments.css'

function Payments() {
  const payments = [
    {
      id: 'PAY-001',
      user: 'Rajesh Kumar',
      property: 'Legacy Heights - A-1203',
      amount: '₹5,00,000',
      tranche: 'Tranche 3/8',
      status: 'Completed',
      date: 'Nov 10, 2024',
      method: 'Bank Transfer'
    },
    {
      id: 'PAY-002',
      user: 'Priya Sharma',
      property: 'Legacy Gardens - B-402',
      amount: '₹3,50,000',
      tranche: 'Tranche 5/8',
      status: 'Pending',
      date: 'Nov 12, 2024',
      method: 'Cheque'
    },
    {
      id: 'PAY-003',
      user: 'Amit Patel',
      property: 'Legacy Towers - C-805',
      amount: '₹7,20,000',
      tranche: 'Tranche 2/8',
      status: 'Completed',
      date: 'Nov 08, 2024',
      method: 'Online Payment'
    },
    {
      id: 'PAY-004',
      user: 'Sneha Gupta',
      property: 'Legacy Heights - A-1501',
      amount: '₹4,80,000',
      tranche: 'Tranche 4/8',
      status: 'Failed',
      date: 'Nov 11, 2024',
      method: 'Bank Transfer'
    },
    {
      id: 'PAY-005',
      user: 'Vikram Singh',
      property: 'Legacy Gardens - D-302',
      amount: '₹6,00,000',
      tranche: 'Tranche 6/8',
      status: 'Processing',
      date: 'Nov 13, 2024',
      method: 'Online Payment'
    }
  ]

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'status-success'
      case 'Pending':
        return 'status-warning'
      case 'Failed':
        return 'status-error'
      case 'Processing':
        return 'status-info'
      default:
        return ''
    }
  }

  return (
    <div className="payments-page">
      <div className="page-header">
        <h1 className="page-title-white">Payments Management</h1>
        <button className="btn btn-primary">+ Record Payment</button>
      </div>

      <div className="payment-stats">
        <div className="payment-stat-card card">
          <div className="payment-stat-icon">💰</div>
          <div>
            <h3>Total Collected</h3>
            <p className="payment-stat-value">₹125.5 Cr</p>
          </div>
        </div>
        <div className="payment-stat-card card">
          <div className="payment-stat-icon">⏳</div>
          <div>
            <h3>Pending Payments</h3>
            <p className="payment-stat-value">₹22.3 Cr</p>
          </div>
        </div>
        <div className="payment-stat-card card">
          <div className="payment-stat-icon">📊</div>
          <div>
            <h3>This Month</h3>
            <p className="payment-stat-value">₹8.5 Cr</p>
          </div>
        </div>
        <div className="payment-stat-card card">
          <div className="payment-stat-icon">❌</div>
          <div>
            <h3>Failed Payments</h3>
            <p className="payment-stat-value">5</p>
          </div>
        </div>
      </div>

      <div className="card payments-table-container">
        <table className="payments-table">
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>User</th>
              <th>Property</th>
              <th>Amount</th>
              <th>Tranche</th>
              <th>Status</th>
              <th>Date</th>
              <th>Method</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="payment-id">{payment.id}</td>
                <td>{payment.user}</td>
                <td>{payment.property}</td>
                <td className="payment-amount">{payment.amount}</td>
                <td>{payment.tranche}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(payment.status)}`}>
                    {payment.status}
                  </span>
                </td>
                <td>{payment.date}</td>
                <td>{payment.method}</td>
                <td>
                  <div className="table-actions">
                    <button className="action-btn">👁️</button>
                    <button className="action-btn">⬇️</button>
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

export default Payments

