import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Footer() {
  return <footer className="footer">
    <div className="container-fluid">
      <div className="row text-muted">
        <div className="col-6 text-start">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a className="text-muted" href="#">Support</a>
            </li>
            <li className="list-inline-item">
              <a className="text-muted" href="#">Help Center</a>
            </li>
            <li className="list-inline-item">
              <a className="text-muted" href="#">Privacy</a>
            </li>
            <li className="list-inline-item">
              <a className="text-muted" href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="col-6 text-end">
          <p className="mb-0">
            © 2023 - <a className="text-muted" href="/">AppStack</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
}

export default () => {

  return <div className={'wrapper'}>
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="main">
      <Navbar />
      <main className={'content'}>
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
}
