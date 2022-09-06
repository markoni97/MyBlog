import { FormControl, TextField, Button } from '@mui/material';
import { FC } from 'react';
import { UserInterface } from '../../types';
import useInput from '../../hook/use-input';
import { useAppDispatch } from '../../hook/hooks';
import { uiActions } from '../../store/ui-store/ui-slice';

const SignUp: FC = () => {
  const dispatch = useAppDispatch();

  const {
    enteredValue: fullNameValue,
    hasError: fullNameHasError,
    isValid: fullNameIsValid,
    inputHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    reset: resetFullName,
  } = useInput((value) => value.trim() !== '');

  const {
    enteredValue: emailValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    inputHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== '');

  const {
    enteredValue: usernameValue,
    hasError: usernameHasError,
    isValid: usernameIsValid,
    inputHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsername,
  } = useInput((value) => value.trim() !== '');

  const {
    enteredValue: passwordValue,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    inputHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim() !== '');

  const {
    enteredValue: confirmPassValue,
    hasError: confirmPassHasError,
    isValid: confirmPassIsValid,
    inputHandler: confirmPassChangeHandler,
    inputBlurHandler: confirmPassBlurHandler,
    reset: resetConfirmPass,
  } = useInput((value) => value === passwordValue && value.trim() !== '');

  let formIsValid =
    fullNameIsValid &&
    emailIsValid &&
    usernameIsValid &&
    passwordIsValid &&
    confirmPassIsValid;

  const resetForm = () => {
    resetFullName();
    resetEmail();
    resetUsername();
    resetPassword();
    resetConfirmPass();
  };

  const signup = async (user: UserInterface) => {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    return data;
  };

  const signupHandler = async () => {
    if (!formIsValid) {
      console.log('Form is not valid..');
      return;
    }

    dispatch({type: uiActions.showModal});

    const user: UserInterface = {
      fullname: fullNameValue,
      email: emailValue,
      username: usernameValue,
      password: passwordValue,
    };

    try {
      const result = await signup(user);
      console.log(result);
    } catch (err) {
      console.log(err)
    }
    dispatch({type: uiActions.hideModal});
    resetForm();
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
        onChange={fullNameChangeHandler}
        onBlur={fullNameBlurHandler}
        value={fullNameValue}
        error={fullNameHasError}
        helperText={fullNameHasError && 'Must not be empty'}
      />
      <TextField
        id="email"
        label="Email"
        required
        type="email"
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        value={emailValue}
        error={emailHasError}
        helperText={emailHasError && 'Must not be empty'}
      />
      <TextField
        id="username"
        label="Username"
        required
        type="text"
        onChange={usernameChangeHandler}
        onBlur={usernameBlurHandler}
        value={usernameValue}
        error={usernameHasError}
        helperText={usernameHasError && 'Must not be empty'}
      />
      <TextField
        id="password"
        label="Password"
        required
        type="password"
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
        value={passwordValue}
        error={passwordHasError}
        helperText={passwordHasError && 'Must not be empty'}
      />
      <TextField
        id="conPass"
        label="Confirm password"
        required
        type="password"
        onChange={confirmPassChangeHandler}
        onBlur={confirmPassBlurHandler}
        value={confirmPassValue}
        error={confirmPassHasError}
        helperText={confirmPassHasError && 'Passwords must match!'}
      />
      <Button
        variant="contained"
        onClick={signupHandler}
        disabled={!formIsValid}
      >
        Register
      </Button>
    </FormControl>
  );
};

export default SignUp;
