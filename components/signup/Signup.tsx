import { FormControl, TextField, Button } from '@mui/material';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { UserInterface } from '../../types';

const Signup: FC = () => {
  // const [isValid, setIsValid] = useState(false);
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const signupHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !fullname ||
      !email ||
      !email.includes('@') ||
      username.trim().length < 5 ||
      password.trim().length < 7 ||
      password !== confirmPass
    ) {
      return;
    }

    const user: UserInterface = {
      fullname,
      email,
      username,
      password,
    };

    console.log(user);

    fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        response.json();
      })
      .then((data) => console.log(data));
  };

  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const usernameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const confirmPassChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPass(e.target.value);
  };

  return (
    <FormControl
      sx={{
        display: 'flex',
        padding: '1rem',
        gap: '1.5rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}
    >
      <TextField
        id="fullName"
        label="Full Name"
        required
        type="text"
        onChange={nameChangeHandler}
      />
      <TextField
        id="email"
        label="Email"
        required
        type="email"
        onChange={emailChangeHandler}
      />
      <TextField
        id="username"
        label="Username"
        required
        type="text"
        onChange={usernameChangeHandler}
      />
      <TextField
        id="password"
        label="Password"
        required
        type="password"
        onChange={passwordChangeHandler}
      />
      <TextField
        id="conPass"
        label="Confirm password"
        required
        type="text"
        onChange={confirmPassChangeHandler}
      />
      <Button variant="contained">Register</Button>
    </FormControl>
  );
};

export default Signup;
