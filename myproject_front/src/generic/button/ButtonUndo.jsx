import React from 'react';
import style from "./button.module.css";
import Button from "./Button.jsx";

const ButtonUndo = ({text, onClick, status}) => {
  return (
    <Button text={text} onClick={onClick} className={
      status === 'do' ?
        style.do :
        style.undo
    }/>
  );
};

export default ButtonUndo;