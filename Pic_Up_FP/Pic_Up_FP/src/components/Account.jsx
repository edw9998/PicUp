import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from './Modal';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const [selectedImg, setSelectedImg] = useState(null);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="App">
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default Account;
