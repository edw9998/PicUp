import React from 'react';
import Title from './components/Title';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <img src='https://i.ibb.co/QcNW1ZH/pic-Up-removebg-preview.png' style={{height:100, width:130}} />
      <h1 className='text-center text-3xl font-roboto'>Pic Up !</h1>
      <h2 className='text-center text-3xl font-roboto'>An Image Gallery Application For Shared Use.</h2>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
