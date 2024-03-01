import { useState } from 'react'
import Calculator from './Components/Calculator'
// import reactLogo from './assets/react.svg'
import './index.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Calculator/>
    </div>
  )
}

export default App
