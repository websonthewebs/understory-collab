import ucLogo from './assets/UC_Logo.png'
import './App.css'

function App() {
  return (
    <main className="landing">
      <h1 className="sr-only">Understory Collaborative</h1>
      <img src={ucLogo} className="logo" alt="Understory Collab logo" />
      <p className="tagline" aria-live="polite">Quietly growing beneath the canopy.</p>
      <p className="coming-soon">Something is taking root.</p>
    </main>
  )
}

export default App
