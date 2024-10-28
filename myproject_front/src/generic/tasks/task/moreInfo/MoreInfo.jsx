import style from './moreInfo.module.css'
import {forwardRef} from "react";

const MoreInfo = forwardRef(({gvm, purchaseCount, totalCashback}, ref) => {
  return (
    <section className={style.plateMoteInfo} ref={ref}>
      <div className={style.data}>
        <p>Сумма, которую потратят клиенты</p>
        <p>{gvm}</p>
      </div>
      <div className={style.data}>
        <p>Количество покупок</p>
        <p>{purchaseCount}</p>
      </div>
      <div className={style.data}>
        <p>Сумма кэшбека</p>
        <p>{totalCashback}</p>
      </div>
    </section>
  );
});

export default MoreInfo;