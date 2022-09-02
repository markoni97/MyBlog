import { ChangeEvent, useState, FocusEvent } from 'react';

interface InputHook {
  enteredValue: String;
  hasError: boolean;
  inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  inputBlurHandler: (e: FocusEvent<HTMLInputElement>) => void;
}

const useInput = (validate: (value: string) => boolean): InputHook => {
  const [enteredValue, setEnteredValue] = useState<string>('');
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const isValid: boolean = validate(enteredValue);
  const hasError: boolean = !isValid && isTouched;

  const inputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = (e: FocusEvent<HTMLInputElement>): void => {
    setIsTouched(true);
  }

  return {
    enteredValue,
    hasError,
    inputHandler,
    inputBlurHandler
  };
};

export default useInput;