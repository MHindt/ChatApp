import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { Image } from 'mui-image';

const Register = () => {
  
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
        console.log('inside of inputHandler--->', e.target.userName.value)
    }
  const navigate = useNavigate();
  return (
    
      <form onSubmit={handleSubmit} >
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
            value = {userName}
            onChange={e => setUserName(e.target.value)} 
          />
          <TextField
            variant='outlined'
            placeholder='Email'
            type='email'
            margin='normal'
            name='email'
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField placeholder='Password' type='password' margin='normal'
           name='password'
           value={password}
           onChange ={e => setPassword(e.target.value)}
           />
          <TextField
            placeholder='Confirm Password'
            type='password'
            margin='normal'
            name='confirmPassword'
            value={confirmPassword}
            onChange = {e => setConfirmPassword(e.target.value)}
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
    
  );
};
export default Register;
