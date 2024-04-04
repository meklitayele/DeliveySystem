import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import {  CssVarsProvider } from '@mui/joy'; 
import { useRef,useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#27296d',
      },
    },
  });
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/Login');
  };

  const emailRef= useRef();
  const passwordRef= useRef()
  const passwordConfirmRef= useRef()
  const {signup} = useAuth();
  const [error,setError]=useState('')
  const [loading,setLoading] =useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('Passwords do not match')
    }
    try{
      setError('')
      setLoading(true)
      await signup(emailRef.current.value,passwordRef.current.value)
    }catch{
      setError('Filed to create an account')
    }
   setLoading(false)
  }

  return (
    <ThemeProvider theme={theme}>
       <CssVarsProvider> 
      <main>
        <CssBaseline />
        <Sheet
          sx={{
            width: 350,
            mx: 'auto',
            my: 18,
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Sign Up</b>
            </Typography>
            <Typography level="body-sm">Create an account to get started.</Typography>
          </div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="johndoe@email.com"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>
          <Button sx={{ backgroundColor: '#27296d', color: '#fff' }}>Sign Up</Button>
          <Typography
            endDecorator={<Link onClick={handleLogin} sx={{ color: '#27296d' }}>Already have an account? Login</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center', color: '#00000' }}
          >
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </Typography>
        </Sheet>
      </main>
        </CssVarsProvider>
    </ThemeProvider>
  );
  
}
export default Signup
