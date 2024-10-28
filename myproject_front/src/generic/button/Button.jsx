import style from './button.module.css';

const Button = ({text, onClick, className}) => {
  return (
    <button onClick={onClick} className={`${className} ${style.button}`}>
      <p>{text}</p>
    </button>
  );
};

export default Button;