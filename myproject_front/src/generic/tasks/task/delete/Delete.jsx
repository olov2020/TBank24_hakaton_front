import deleteIcon from '../../../../../public/deleteIcon.svg'
import style from './delete.module.css'
import {forwardRef} from "react";

const Delete = forwardRef(({status, onClick, disabled}, ref) => {

  return (
    (status === 'processing' ?
        <p className={
          disabled ?
            style.text :
            `${style.text} ${style.hover}`
        } onClick={onClick}>Отменить</p> :
        <img alt='Delete object' src={deleteIcon} onClick={onClick} className={
          disabled ?
            style.text :
            `${style.text} ${style.hover}`
        }/>
    )
  );
});

export default Delete;