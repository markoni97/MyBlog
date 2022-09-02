import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { LoginInterface } from '../../types';
import {
  TextField,
  Button,
  FormControl
} from '@mui/material';

const Login: FC = () => {
  const [loginData, setLoginData] = useState<LoginInterface>({
    email: '',
    password: '',
  });

  const usernameInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      email: e.target.value,
    });
  };

  const passwordInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      password: e.target.value,
    });
  };

  const loginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login clicked!');
  };

  return (
    <FormControl
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: '1rem',
        padding: '1rem'
      }}
    >
      
      <TextField
        id="username"
        label="Username"
        required
        type="text"
        onChange={usernameInputHandler}
      />
      <TextField
        id="pass"
        label="Password"
        required
        type="password"
        onChange={passwordInputHandler}
      />
      <Button variant="contained" size="large">
        Login
      </Button>
    </FormControl>
  );
};

export default Login;
