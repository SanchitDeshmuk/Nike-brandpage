import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Brandpage from './components/brandpage/Brandpage'
import Nav from './components/nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Brandpage/>
    </>
  )
}

export default App
