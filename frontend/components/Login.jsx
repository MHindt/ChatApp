import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button} from '@mui/material';
import { borderRadius } from '@mui/system';


const Login = () => {
  //need to use button to go to signup page 
  const navigate = useNavigate();
  return (
    <div sv={{backgroundImage: `url()`}}>
     <form>
      <Box
        display='flex'
        margin = 'auto'
        alignItems='center'
        flexDirection={'column'}
        maxWidth= {400}
        justifyContent= {'center'}
        marginTop = {10}
        padding = {3}
        borderRadius = {5}
        boxShadow = '10px 10px 10px 10px #ccc'
        filter= 'drop-shadow (8px 8px 4px #FAEA10'
        

       
        
      >
        <Typography variant='h3'  textAlign={'center'} padding={3}>Login</Typography>
        <TextField variant='outlined' placeholder='Email' type='email'margin='normal'/>
        <TextField placeholder='Password' type='password' margin='normal'/>
        <TextField placeholder='Confirm Password' type='password' margin='normal'/>
        <Button variant='contained' sx={{borderRadius: 3, marginTop: 3 }}>Submit</Button>
        <Button onClick={() => {navigate('/messenger/register')}} sx={{borderRadius: 3, marginTop: 3 }}>Sign Up</Button>
      </Box>
      </form>
    </div>
  );
};
export default Login;
