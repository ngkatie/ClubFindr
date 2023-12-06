import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import './App.css'

import Landing from './components/Landing'
import Registration from './components/Registration'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
