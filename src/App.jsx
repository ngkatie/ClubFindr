import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import './App.css'

import Landing from './components/Landing'
import Explore from './components/Explore'
import Registration from './components/Registration'
import Login from './components/Login'
import Profile from './components/Profile'
import ErrorPage from './components/ErrorPage'

// {<script src="tota11y.min.js"></script>}


function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/registration" element={<Registration />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
