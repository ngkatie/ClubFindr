import { useState } from 'react'
import ClubFindrLogo from "../public/logo.png"
import Nav from './components/Nav'
import Landing from './components/Landing'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Nav/>
        <Landing/>
      </div>
    </>
  )
}

export default App
