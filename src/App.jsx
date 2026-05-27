import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Contact from './pages/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SolutionDetail from './pages/SolutionDetail'
import Solutions from './pages/Solutions'

function App() {
  const location = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const id = window.setTimeout(() => setVisible(true), 200)
    return () => window.clearTimeout(id)
  }, [location.key])

  return (
    <div className="min-h-screen bg-bg text-text font-sans">
      <Navbar />
      <ScrollToTop />
      <main
        key={location.key}
        className={`transition-opacity ${visible ? 'opacity-100 duration-300' : 'opacity-0 duration-200'} ease-out`}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
