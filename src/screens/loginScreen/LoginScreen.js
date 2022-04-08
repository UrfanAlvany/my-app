import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import {login} from '../../redux/actions/auth.action'

import './_loginScreen.scss'

const LoginScreen = () => {

const dispatch = useDispatch()

const accessToken = useSelector(state=>state.auth.accessToken)

const handleLogin = () =>{
   dispatch(login())
   
}
const history = useHistory()
useEffect(() => {
   if(accessToken) {
         history.push('/')
   }
}, [accessToken, history])



   return (
      <div className='login'>
         <div className='login__container'>
            <h2>Log in </h2>
            <img
               src='https://pngimg.com/uploads/google/google_PNG102344.png'
               alt=''
            />
            <button onClick={handleLogin} >Login With google account </button>
            <p>This is login page </p>
         </div>
      </div>
   )

}


export default LoginScreen