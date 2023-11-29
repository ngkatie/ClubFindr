import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import './App.css'

import Landing from './components/Landing'
import Registration from './components/Registration'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
