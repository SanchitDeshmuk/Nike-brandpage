import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Brandpage from './components/Brandpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Brandpage/>
    </>
  )
}

export default App
