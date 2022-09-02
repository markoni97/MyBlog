import { ChangeEvent, useState } from 'react';

type inputChangeEvent = ChangeEvent<HTMLInputElement>

interface InputHook {
  enteredValue: String;
  isTouched: Boolean;
  hasError: Boolean;
  inputHandler: (e: inputChangeEvent) => void;
  touchHandler: (e: inputChangeEvent) => void;
}

const useInput = (validate: (value: string) => boolean): InputHook => {
  const [enteredValue, setEnteredValue] = useState<string>('');
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const isValid = validate(enteredValue);
  const hasError = !isValid && isTouched;

  const inputHandler = (e: inputChangeEvent): void => {
    setEnteredValue(e.target.value);
  };

  const touchHandler = (e: inputChangeEvent) => {
    console.log(e.target.value);
    // setIsTouched(e.target.value);
  }

  return {
    enteredValue,
    isTouched,
    hasError,
    inputHandler,
    touchHandler
  };
};
