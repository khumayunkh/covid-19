import './App.sass'
import Header from './components/Header/Header'
import Mask from './pages/FirstMask/Mask'
import Properties from './pages/Properties/Properties'
import Protect from './pages/Protect/Protect'

function App() {
  return (
    <div className="App">
      <Header/>
      <Properties/>
      <Mask/>
      <Protect/>
    </div>
  )
}

export default App
