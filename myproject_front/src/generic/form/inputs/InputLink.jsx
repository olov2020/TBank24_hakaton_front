import {useState} from 'react';
import Input from "./Input.jsx";

const InputLink = ({name, placeholder, value, setValue, inputField, error, setError}) => {

  const [isValid, setIsValid] = useState(true);
  const errors = {
    errorEmpty: 'Данное поле не может быть пустым',
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
    if (inputValue.length === 0) {
      return errors.errorEmpty;
    }

    setIsValid(true);
    setError(null);
    return '';
  }

  return (
    <Input name={name} type='text' value={value}
           placeholder={placeholder}
           onChange={handleChange} isValid={isValid}
           inputField={inputField}
           error={error}
    />
  );
};

export default InputLink;