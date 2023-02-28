import './App.sass'
import Header from './components/Header/Header'
import Mask from './pages/FirstMask/Mask'
import Properties from './pages/Properties/Properties'
import Protect from './pages/Protect/Protect'
import Reasons from './pages/Reasons/Reasons'

function App() {
  return (
    <div className="App">
      <Header/>
      <Properties/>
      <Mask/>
      <Protect/>
      <Reasons/>
    </div>
  )
}

export default App
