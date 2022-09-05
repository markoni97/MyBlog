import { FC } from 'react';
import { TextField, Button, FormControl } from '@mui/material';
import useInput from '../../hook/use-input';
import { signIn } from 'next-auth/react';

const Login: FC = () => {
  const {
    enteredValue: usernameValue,
    hasError: usernameHasError,
    isValid: usernameIsValid,
    inputHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    enteredValue: passwordlValue,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    inputHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.trim() !== '');

  let formIsValid = usernameIsValid && passwordIsValid;

  const loginHandler = async () => {
    if (!formIsValid) {
      console.log('Form is not valid!');
      return;
    }
    const result = await signIn('credentials', {
      redirect: false,
      username: usernameValue,
      password: passwordlValue,
    });
    console.log(result);
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
        onChange={usernameChangeHandler}
        onBlur={usernameBlurHandler}
        value={usernameValue}
        error={usernameHasError}
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
      <Button
        variant="contained"
        size="large"
        onClick={loginHandler}
        disabled={!formIsValid}
      >
        Login
      </Button>
    </FormControl>
  );
};

export default Login;
