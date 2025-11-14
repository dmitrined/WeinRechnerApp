
import type { JSX } from 'react'
import './App.css'
import AlcCalculation from './components/AlcCalculation/AlcCalculation'
import PercentSRCalc from './components/PercentSRCalc/PercentSRCalc'

function App(): JSX.Element{
  

  return (
    <div>
      <PercentSRCalc/>
      <AlcCalculation/>
    </div>
  )
}

export default App
