import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from './pages/Vans.jsx'
import VanDetail from './pages/VanDetail.jsx'
import Layout from './components/Layout.jsx'
import Dashboard from './pages/Host/Dashboard.jsx'
import Income from './pages/Host/Income.jsx'
import Reviews from './pages/Host/Reviews.jsx'
import HostLayout from './components/HostLayout.jsx'
import HostVans from './components/HostVans.jsx'
import HostVanDetail from './pages/Host/HostVanDetail.jsx'
import HostVanInfo from './pages/Host/HostVanInfo.jsx'
import HostVanPricings from './pages/Host/HostVanPricing.jsx'
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx'
import NotFound from './pages/NotFound.jsx'
import Login from './pages/Login.jsx'
import AuthRequired from './components/AuthRequired.jsx'


// import App from './App.jsx'

// import "./server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route
            path="login"
            element={<Login />}
          />
          
          <Route element={<AuthRequired />}>
            <Route path ="host" element={<HostLayout/>}>
              <Route index element={<Dashboard />}/>
              <Route path ="income" element={<Income />}/>
              <Route path ="reviews" element={<Reviews />}/>
              <Route path ="vans" element={<HostVans />}/>
              <Route path ="vans/:id" element={<HostVanDetail />}>
                  <Route index element={<HostVanInfo/>}/>
                  <Route path="pricing" element={<HostVanPricings/>}/>
                  <Route path="photos" element={<HostVanPhotos/>}/>
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}



createRoot(document.getElementById('root')).render(
  <App/>
)
