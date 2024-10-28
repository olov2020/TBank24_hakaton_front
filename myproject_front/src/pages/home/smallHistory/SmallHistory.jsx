import style from './smallHistory.module.css'
import {useEffect, useState} from "react";
import {getBudgetCalculation} from "../../../api/userApi.js";
import ButtonUndo from "../../../generic/button/ButtonUndo.jsx";
import {HISTORY_ROUTE} from "../../../routing/consts.js";
import {useNavigate} from "react-router-dom";

const SmallHistory = () => {

  const [budgetData, setBudgetData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const data = await getBudgetCalculation();
        setBudgetData(data.reverse());
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBudget();
  }, []);

  const navigate = useNavigate();

  const onClick = () => {
    navigate(HISTORY_ROUTE);
  }

  return (
    <section>
      <h3 className={style.header}>История подсчетов</h3>

      <div className={style.data}>
        <div className={style.info}>
          <p className={style.headerInfo}>Id бренда</p>
          <p className={style.headerInfo}>Кэшбек</p>
        </div>

        {budgetData !== null && budgetData.map((item, index) => (
          index > 2 ?
            <></> :
            <div key={index} className={`${style.task} ${style.info}`}>
              <p>{item.request.brand_id}</p>
              <p className={style.cashback}>({item.totalCashback}%)</p>
            </div>
        ))}
      </div>

      <div style={{
        marginTop: '1rem',
      }}>
      <ButtonUndo text='Управление подсчетами' onClick={onClick}/>
      </div>
    </section>
  );
};

export default SmallHistory;