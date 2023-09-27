import React from 'react'
import Google from '../img/google.png'
import Github from '../img/github.png'
import '../App.css'
export const Login = () => {
    const google = () => {
        window.open("http://localhost:8000/auth/google", "_self");
      };

      const github = () => {
        window.open("http://localhost:8000/auth/github", "_self");
      };

  return (
    <div className='login'>
        <h1 className='loginTitle'>Choose a login method</h1>
        <div className='wrapper'>
            <div className='left'>
               <div className='loginButton google'  onClick={google}>
                <img src={Google} alt='' className='icon'/>
                Google
               </div>

               <div className='loginButton github' onClick={github}>
                <img src={Github} alt='' className='icon'/>
                Github
               </div>
            </div>
            <div className='center'>
                <div className='line'/>
                <div className='or'> OR</div>
            </div>
            <div className='right'>
                <input type='text' placeholder='Username'/>
                <input type='text' placeholder='Password'/>
                <button className='submit'> Login</button>
            </div>

        </div>
    </div>
  )
}