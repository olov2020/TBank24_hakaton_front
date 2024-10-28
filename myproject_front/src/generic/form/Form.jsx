import Button from "../button/Button.jsx";
import {createBudgetTask} from "../../api/userApi.js";
import {useState} from "react";
import InputNumber from "./inputs/InputNumber.jsx";
import InputLink from "./inputs/InputLink.jsx";
import InputDate from "./inputs/InputDate.jsx";
import style from './form.module.css';
import InputText from "./inputs/InputText.jsx";
import ButtonDo from "../button/ButtonDo.jsx";

const Form = ({inputs, buttonText}) => {

  const formValues = useState({})
  const errors = useState({})

  const onClick = () => {
    let check = false;
    errors.map((item) => {
      if (item !== null) {
        alert('В форме есть ошибки');
        check = true;
      }
    })

    if (!check) {
      const brand_id = formValues.id;
      const clientsFileKey = formValues.link;
      const open_date = formValues.date;
      const newDate = new Date(formValues.date);
      newDate.setMonth(newDate.getMonth() + 1);
      const close_date = formValues.dateEnd.length === 0 ?
        newDate :
        formValues.dateEnd;
      const cb_percent = formValues.percent;
      createBudgetTask({brand_id, clientsFileKey, open_date, cb_percent, close_date});
    }
  }

  const showInput = (input) => {
    switch (input) {
      case 'id': {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [id, setId] = useState('');
        const [errorId, setErrorId] = useState(null);
        formValues.id = id;
        errors.errorId = errorId;
        return <InputText name={input} value={id} setValue={setId}
                          error={errorId} setError={setErrorId}
                          inputField='Id бренда' placeholder='Ab54i'/>
      }
      case 'link': {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [link, setLink] = useState('');
        const [errorLink, setErrorLink] = useState(null);
        formValues.link = link;
        errors.errorLink = errorLink;
        return <InputLink name={input} value={link} setValue={setLink}
                          error={errorLink} setError={setErrorLink}
                          inputField='Добавьте ссылку на файл с клиентами или загрузите его' placeholder='/'/>
      }
      case 'date': {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [date, setDate] = useState('');
        const [errorDate, setErrorDate] = useState(null);
        formValues.date = date;
        errors.errorDate = errorDate;
        const today = new Date();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const year = today.getFullYear();
        return <InputDate name={input} value={date} setValue={setDate}
                          error={errorDate} setError={setErrorDate}
                          inputField='Дата начала оффера'
                          placeholder={`${year}-${month}-${day}`}/>
      }
      case 'dateEnd': {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [dateEnd, setDateEnd] = useState('');
        const [errorDateEnd, setErrorDateEnd] = useState(null);
        formValues.dateEnd = dateEnd;
        errors.errorDateEnd = errorDateEnd;
        const today = new Date();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const year = today.getFullYear();
        return <InputDate name={input} value={dateEnd} setValue={setDateEnd}
                          error={errorDateEnd} setError={setErrorDateEnd}
                          inputField='Дата окончания оффера'
                          placeholder={`${year}-${month}-${day}`} required={false}/>
      }
      case 'percent': {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [percent, setPercent] = useState('');
        const [errorPercent, setErrorPercent] = useState(null);
        formValues.percent = percent;
        errors.errorPercent = errorPercent;
        return <InputNumber name={input} value={percent} setValue={setPercent}
                            error={errorPercent} setError={setErrorPercent}
                            inputField='Процент кешбэка'
                            placeholder='8%'/>
      }
    }
  }

  return (
    <section className={style.section}>
      <h1>Создайте задачу на подсчет бюджета</h1>
      <form className={style.form}>
        {inputs.map((input, index) => (
          <div key={index}>
            {showInput(input)}
          </div>
        ))}

        <ButtonDo text={buttonText} onClick={onClick} status='do'/>
      </form>
    </section>
  );
};

export default Form;