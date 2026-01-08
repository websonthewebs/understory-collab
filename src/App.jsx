import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Advisory from './pages/Advisory'
import Implementation from './pages/Implementation'
import Portfolios from './pages/Portfolios'
import Contact from './pages/Contact'
import Accessibility from './pages/Accessibility'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="advisory" element={<Advisory />} />
            <Route path="implementation" element={<Implementation />} />
            <Route path="portfolios" element={<Portfolios />} />
            <Route path="contact" element={<Contact />} />
            <Route path="accessibility" element={<Accessibility />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
