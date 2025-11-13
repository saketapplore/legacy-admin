import './Documents.css'

function Documents() {
  const documents = [
    {
      id: 1,
      name: 'Welcome Letter - Rajesh Kumar',
      property: 'Legacy Heights - A-1203',
      type: 'PDF',
      size: '2.3 MB',
      uploadedBy: 'Admin',
      date: 'Nov 10, 2024',
      category: 'Welcome Letter'
    },
    {
      id: 2,
      name: 'Sale Agreement - Priya Sharma',
      property: 'Legacy Gardens - B-402',
      type: 'PDF',
      size: '3.5 MB',
      uploadedBy: 'Admin',
      date: 'Nov 08, 2024',
      category: 'Agreement'
    },
    {
      id: 3,
      name: 'Payment Receipt - PAY-001',
      property: 'Legacy Heights - A-1203',
      type: 'PDF',
      size: '1.2 MB',
      uploadedBy: 'System',
      date: 'Nov 10, 2024',
      category: 'Receipt'
    },
    {
      id: 4,
      name: 'Construction Progress Report - Oct 2024',
      property: 'Legacy Heights',
      type: 'PDF',
      size: '5.8 MB',
      uploadedBy: 'Project Manager',
      date: 'Nov 01, 2024',
      category: 'Report'
    },
    {
      id: 5,
      name: 'Floor Plan - Legacy Gardens',
      property: 'Legacy Gardens',
      type: 'PDF',
      size: '4.1 MB',
      uploadedBy: 'Admin',
      date: 'Oct 28, 2024',
      category: 'Floor Plan'
    }
  ]

  return (
    <div className="documents-page">
      <div className="page-header">
        <h1 className="page-title-white">Documents Management</h1>
        <button className="btn btn-primary">+ Upload Document</button>
      </div>

      <div className="documents-filter card">
        <input type="text" placeholder="Search documents..." className="search-input-full" />
        <select className="filter-select">
          <option>All Categories</option>
          <option>Welcome Letter</option>
          <option>Agreement</option>
          <option>Receipt</option>
          <option>Report</option>
          <option>Floor Plan</option>
        </select>
        <select className="filter-select">
          <option>All Properties</option>
          <option>Legacy Heights</option>
          <option>Legacy Gardens</option>
          <option>Legacy Towers</option>
        </select>
      </div>

      <div className="documents-grid">
        {documents.map((doc) => (
          <div key={doc.id} className="document-card card">
            <div className="document-icon">📄</div>
            <div className="document-content">
              <h3 className="document-name">{doc.name}</h3>
              <p className="document-property">{doc.property}</p>
              
              <div className="document-details">
                <div className="document-detail-item">
                  <span className="detail-label">Type:</span>
                  <span className="detail-value">{doc.type}</span>
                </div>
                <div className="document-detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{doc.size}</span>
                </div>
                <div className="document-detail-item">
                  <span className="detail-label">Category:</span>
                  <span className="detail-value">{doc.category}</span>
                </div>
                <div className="document-detail-item">
                  <span className="detail-label">Uploaded by:</span>
                  <span className="detail-value">{doc.uploadedBy}</span>
                </div>
                <div className="document-detail-item">
                  <span className="detail-label">Date:</span>
                  <span className="detail-value">{doc.date}</span>
                </div>
              </div>

              <div className="document-actions">
                <button className="btn btn-outline">Preview</button>
                <button className="btn btn-primary">Download</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Documents

