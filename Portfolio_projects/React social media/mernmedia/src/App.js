import React, { useState } from 'react'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import FriendsId from "./Pages/FriendsId/FriendsId"
import { Route, Routes } from 'react-router-dom'
import Notification from './Pages/Notification/Notification'
import Login from './Pages/RegisterPage/Login'
import SignUp from './Pages/RegisterPage/SignUp'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  const [friendProfile,setFriendsProfile] =useState([])

  return (
    <div className='App'>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='/home' element={<Home setFriendsProfile={setFriendsProfile}/> } />
        
        <Route path='/profile' element={ <Profile /> } />

        <Route path='/friendsId' element={<FriendsId friendProfile={friendProfile} />} />
      
        <Route path='/notification' element={<Notification />} />

        <Route path='/signup' element={<SignUp />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
