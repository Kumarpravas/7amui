"use client"
import React, { useContext } from 'react'
import Login from './login/page'
import Home from './home/page'
import { ctx } from '@/context/appContext'
const App = () => {
  const {state}=useContext(ctx)
  return <div>
    {state.isLoggedIn? <Home />:<Login />}
    </div>
}

export default App
