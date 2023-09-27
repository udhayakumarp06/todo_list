import React from 'react'
import{BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import Header from './components/Header'
import { Login } from './components/Login'
import Home from './components/Home'
import { useEffect, useState } from "react";
  const App = () => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const getUser = () => {
        fetch("http://localhost:8000/auth/login/success", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        })
          .then((response) => {
            if (response.status === 200) return response.json();
            throw new Error("authentication has been failed!");
          })
          .then((resObject) => {
            setUser(resObject.user);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getUser();
    }, []);
  
  return (
    <BrowserRouter>
    <div>
      <Header user = {user} />
      <Routes>
        <Route path='/' element={user ?<Home/> : <Navigate to ='/login'/> }/>
        <Route path='/login' element={user ? <Navigate to ='/'/> :<Login/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route/>
        <Route/>
        <Route/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App