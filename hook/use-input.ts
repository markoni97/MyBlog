import { ChangeEvent, useState, FocusEvent, useEffect } from 'react';

interface InputHook {
  enteredValue: string;
  isValid: boolean;
  hasError: boolean;
  inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  inputBlurHandler: (e: FocusEvent<HTMLInputElement>) => void;
  reset: () => void;
}

const useInput = (validate: (value: string) => boolean): InputHook => {
  const [enteredValue, setEnteredValue] = useState<string>('');
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const isValid: boolean = validate(enteredValue);
  const hasError: boolean = !isValid && isTouched;

  useEffect(() => {
  });

  const inputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = (e: FocusEvent<HTMLInputElement>): void => {
    setIsTouched(true);
  }

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  }

  return {
    enteredValue,
    isValid,
    hasError,
    inputHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;