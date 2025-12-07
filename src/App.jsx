import ucLogo from './assets/UC_Logo.png'
import './App.css'

function App() {
  return (
    <div className="landing">
      <img src={ucLogo} className="logo" alt="Understory Collab logo" />
      <p className="tagline">Quietly growing beneath the canopy.</p>
      <p className="coming-soon">Something is taking root.</p>
    </div>
  )
}

export default App
