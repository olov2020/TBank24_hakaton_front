import style from './button.module.css'
import Button from "./Button.jsx";

const ButtonDo = ({text, onClick, status}) => {
  return (
    <Button text={text} onClick={onClick} className={
      status === 'do' ?
        style.do :
        style.undo
    }/>
  );
};

export default ButtonDo;