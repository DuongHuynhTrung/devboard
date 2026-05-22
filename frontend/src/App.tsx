import './App.css'

function App() {
  return (
    <div className="coming-soon-container">
      {/* Background glow effects */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      
      <div className="card-glass">
        <div className="logo-area">
          <div className="logo-icon">
            <span className="logo-bar bar-1"></span>
            <span className="logo-bar bar-2"></span>
            <span className="logo-bar bar-3"></span>
          </div>
          <span className="logo-text">DevBoard</span>
        </div>
        
        <h1 className="title">DevBoard — Coming Soon</h1>
        <p className="subtitle">
          Một nền tảng quản lý công việc và Kanban dạng microservices hiện đại, tối giản và mạnh mẽ.
        </p>

        {/* Mock Kanban Board layout in background */}
        <div className="mock-board">
          <div className="mock-column">
            <div className="column-header">TO DO</div>
            <div className="mock-card done">
              <span className="badge tech">Arch</span>
              <h4>Thiết lập Monorepo</h4>
              <div className="card-footer">
                <span className="done-check">✓ Completed</span>
              </div>
            </div>
            <div className="mock-card done">
              <span className="badge api">API</span>
              <h4>Auth Service API</h4>
              <div className="card-footer">
                <span className="done-check">✓ Completed</span>
              </div>
            </div>
          </div>
          
          <div className="mock-column">
            <div className="column-header">IN PROGRESS</div>
            <div className="mock-card active">
              <span className="badge api">API</span>
              <h4>Task Service API</h4>
              <div className="card-footer">
                <span className="status-dot pulsing"></span>
                <span className="status-text">Integrating...</span>
              </div>
            </div>
          </div>

          <div className="mock-column">
            <div className="column-header">DONE</div>
            <div className="mock-card done">
              <span className="badge ui">UI</span>
              <h4>Frontend Boilerplate</h4>
              <div className="card-footer">
                <span className="done-check">✓ Completed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-status">
          <span className="pulse-indicator"></span>
          <span>Hệ thống Microservices đã được khởi tạo thành công</span>
        </div>
      </div>
    </div>
  )
}

export default App
