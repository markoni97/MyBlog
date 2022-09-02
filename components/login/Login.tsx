import { ChangeEvent, FC, FormEvent, MouseEventHandler, useState } from 'react';
import { LoginInterface } from '../../types';
import { TextField, Button, FormControl } from '@mui/material';
import useInput from '../../hook/use-input';

const Login: FC = () => {

  const {
    enteredValue: emailValue,
    hasError: emailHasError,
    inputHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    enteredValue: passwordlValue,
    hasError: passwordHasError,
    inputHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.trim() !== '');


  const loginHandler = () => {
    if(passwordHasError || emailHasError) {
      console.log('Form is not valid!')
      return;
    }
    console.log('Loging in..');
  };

  return (
    <FormControl
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      <TextField
        id="username"
        label="Username"
        required
        type="text"
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        value={emailValue}
        error={emailHasError}
      />
      <TextField
        id="pass"
        label="Password"
        required
        type="password"
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
        value={passwordlValue}
        error={passwordHasError}
      />
      <Button variant="contained" size="large" onClick={() => loginHandler()}>
        Login
      </Button>
    </FormControl>
  );
};

export default Login;
