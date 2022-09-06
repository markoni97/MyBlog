import { FC } from 'react';
import { TextField, Button, FormControl } from '@mui/material';
import useInput from '../../hook/use-input';
import { signIn } from 'next-auth/react';
import { useAppDispatch } from '../../hook/hooks';
import { uiActions } from '../../store/ui-store/ui-slice';

const Login: FC = () => {
  const dispatch = useAppDispatch();

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

    dispatch({ type: uiActions.showModal });

    const result = await signIn('credentials', {
      redirect: false,
      username: usernameValue,
      password: passwordlValue,
    });

    dispatch({ type: uiActions.hideModal });
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
        helperText={usernameHasError && 'Username must not be empty'}
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
        helperText={passwordHasError && 'Password must not be empty'}
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
