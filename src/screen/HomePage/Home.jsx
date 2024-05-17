import React, { useEffect, useState } from 'react'
import './Home.css'
import logo from '../../assets/Hotstar_Logo.png'
import Slider from '../../components/Slider'
import Modal from '../LoginPage/Modal'

import MyCarousel from './MyCarousel'
import toast, { Toaster } from 'react-hot-toast'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")){
      setIsLoggedIn(true);
    }
  },[isLoggedIn])
  
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const logoutHandler = () => {
    toast.success("Logged Out Successfully")
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  }
  console.log("isLoggedIn",isLoggedIn);
  
  return (
    <>
        <div className='header'>
        <img className='logo' src={logo} alt="Hotstar Logo" />
        {!isLoggedIn ? (
          <button className='logInBtn' onClick={openModal}>Log In</button>
        ) : 
        (
          <>
          <button className='logInBtn' onClick={logoutHandler}>Log Out</button>
          </>
        )}
        {isModalOpen && <Modal setIsLoggedIn = {setIsLoggedIn} onClose={closeModal} />}
        </div>

        <div>
        <MyCarousel />
        </div>

        <div>
        <Slider isLoggedIn = {isLoggedIn} />
        </div>
    </>
  )
}
