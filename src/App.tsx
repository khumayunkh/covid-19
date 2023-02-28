import './App.sass'
import Header from './components/Header/Header'
import Mask from './pages/FirstMask/Mask'
import Properties from './pages/Properties/Properties'

function App() {
  return (
    <div className="App">
      <Header/>
      <Properties/>
      <Mask/>
    </div>
  )
}

export default App
