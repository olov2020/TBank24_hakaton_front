import styleInput from "./input.module.css";
import {useEffect, useState} from "react";
import InputMask from 'react-input-mask';

const Input = ({
                 name, type, value, onChange,
                 error, isValid, placeholder,
                 inputField, required = true,
                 mask
               }) => {

  const [placeholderText, setPlaceholderText] = useState('');

  const onBlur = () => {
    setPlaceholderText('');
  };

  const onFocus = () => {
    setPlaceholderText(placeholder);
  };

  return (
    <div>
      <label className={styleInput.label}>
        <InputMask
          required={required}
          type={type}
          name={name}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onClick={onChange}
          mask={mask}
          placeholder={placeholderText}
          className={
            `${isValid ?
              styleInput.valid :
              styleInput.inValid}
          ${styleInput.input}`}
        />

        <p className={styleInput.placeholder}>
          {inputField}
        </p>
      </label>

      {error ?
        <p className={styleInput.error}>
          {error}
        </p> :
        <></>}
    </div>
  );
};

export default Input;