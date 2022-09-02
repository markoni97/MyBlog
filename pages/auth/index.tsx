import { NextPage } from 'next';
import { useState } from 'react';
import Login from '../../components/login/Login';
import Signup from '../../components/signup/Signup';
import { Box, Grid, Button, Typography } from '@mui/material';

const UserAuthentication: NextPage = () => {
  const [isSignup, setIsSignup] = useState<boolean>(false);

  let authText: string = "Don't have an account?";
  let btnLabel: string = 'Register';

  if (isSignup) {
    authText = 'Already have an account?';
    btnLabel = 'Login';
  }

  const toggleLoginHandler = () => {
    setIsSignup((prevState) => {
      return !prevState;
    });
  };

  return (
    <Grid container sx={{ height: '100%' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(/blog-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'top left',
        }}
      ></Grid>
      <Grid item xs={12} sm={8} md={5} sx={{}}>
        <Box
          sx={{
            height: '100%',
            width: '80%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'stretch',
          }}
        >
          <Typography variant="h2" textAlign="center">
            Welcome
          </Typography>
          {!isSignup && <Login />}
          {isSignup && <Signup />}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Typography variant="h5">{authText}</Typography>
            <Button variant="contained" onClick={toggleLoginHandler}>
              {btnLabel}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserAuthentication;
