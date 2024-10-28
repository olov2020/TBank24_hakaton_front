import React, {useState} from "react";
import Input from "./Input.jsx";

const InputNumber = ({name, placeholder, value, setValue, error, setError, inputField}) => {

  const [isValid, setIsValid] = useState(true);
  const errors = {
    errorEmpty: 'Данное поле не может быть пустым',
    errorNotValid: 'Данное значение недоступно',
  }

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    const errorValidation = validateInput(e.target.value);

    if (errorValidation) {
      setIsValid(false);
      setError(errorValidation);
    }
  }

  const validateInput = (inputValue) => {
    if (inputValue.length === 0 || inputValue === '') {
      return errors.errorEmpty;
    }

    if (inputValue < 0 || inputValue > 100) {
      return errors.errorNotValid;
    }

    setIsValid(true);
    setError(null);
    return '';
  }

  return (
    <Input name={name} type='number' value={value}
           placeholder={placeholder}
           onChange={handleChange} isValid={isValid}
           inputField={inputField}
           error={error}
    />
  );
};

export default InputNumber;