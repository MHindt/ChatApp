import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Image } from 'mui-image';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const notify = () => {
    toast.error('Password does not match! Please try again', {
      style: {
        boxShadow: '5px 5px 5px 5px #ccc',
        border: '1px solid #000000'
      }
    });
  };
  const notify2 = () => {
    toast.error('Please fill out areas on form!', {
      style: {
        boxShadow: '5px 5px 5px 5px #ccc',
        border: '1px solid #000000'
      }
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let userName = e.target.userName.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let confirmPassword = e.target.confirmPassword.value;
    if (password !== confirmPassword) {
      notify();
    }
    if(!email || !userName || !password || !confirmPassword) {
      notify2();
    }
    //  const info = await fetch('', {
    //     method: 'POST',
    //     headers: {
    //       "Content-Type": 'application/json',
    //     },
    //     body: JSON.stringify({
    //       userName,
    //       email,
    //       password,
    //       confirmPassword
    //     })
    //   })
  };
  const navigate = useNavigate();
  return (
    <>
    <Toaster />
    <form onSubmit={handleSubmit}>
      <Box
        display='flex'
        margin='auto'
        alignItems='center'
        flexDirection={'column'}
        maxWidth={400}
        justifyContent={'center'}
        marginTop={10}
        padding={3}
        borderRadius={5}
        boxShadow='10px 10px 10px 10px #ccc'
        filter='drop-shadow (8px 8px 4px #FAEA10'
      >
        <Typography variant='h3' textAlign={'center'} padding={3}>
          Register
        </Typography>
        <TextField
          variant='outlined'
          placeholder='Username'
          type='text'
          margin='normal'
          name='userName'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          variant='outlined'
          placeholder='Email'
          type='email'
          margin='normal'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          placeholder='Password'
          type='password'
          margin='normal'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          placeholder='Confirm Password'
          type='password'
          margin='normal'
          name='confirmPassword'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          variant='contained'
          type='submit'
          sx={{ borderRadius: 3, marginTop: 3 }}
        >
          Submit
        </Button>
      </Box>
    </form>
    </>
  );
};
export default Register;
