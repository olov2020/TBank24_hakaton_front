import Input from "./Input.jsx";
import {useState} from "react";

const InputDate = ({name, placeholder, value, setValue, error, setError, required = true, inputField}) => {

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
    if (inputValue.length === 0 && required === true) {
      return errors.errorEmpty;
    }

    const [year, month, day] = inputValue.split('-');
    const inputDate = new Date();
    inputDate.setDate(day);
    inputDate.setMonth(month - 1);
    inputDate.setFullYear(year);
    const today = new Date();
    console.log(inputDate);

    if (inputDate.getTime() < today.getTime()) {
      return errors.errorNotValid;
    }

    setIsValid(true);
    setError(null);
    return '';
  }

  return (
    <Input name={name} type='text' value={value}
           placeholder={placeholder}
           onChange={handleChange} isValid={isValid}
           required={required}
           inputField={inputField}
           error={error}
           mask='9999-99-99'
    />
  );
};

export default InputDate;