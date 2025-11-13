
import type { JSX } from 'react'
import './App.css'
import WeinbauRechnerApp from './components/WeinbauRechnerApp/WeinbauRechnerApp'
import AlcCalculation from './components/AlcCalculation/AlcCalculation'

function App(): JSX.Element{
  

  return (
    <div>
      <WeinbauRechnerApp/>
      <AlcCalculation/>
    </div>
  )
}

export default App
