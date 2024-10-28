import style from './task.module.css'
import Delete from "./delete/Delete.jsx";
import Status from "./status/Status.jsx";
import {useEffect, useRef, useState} from "react";
import MoreInfo from "./moreInfo/MoreInfo.jsx";
import AskToDelete from "./delete/askToDelete/AskToDelete.jsx";

const Task = ({id, gvm, purchaseCount, status, totalCashback, request}) => {

  const [clicked, setClicked] = useState(false);
  const ref = useRef(null);
  const moreInfoRef = useRef(null);

  const deleteRef = useRef(null);
  const [askToDelete, setAskToDelete] = useState(false)

  const time = request.created_at.trim().split('T')[1].split('.')[0];
  const [hours, minutes, seconds] = time.split(':');
  const timeCreated = `${(parseInt(hours, 10) + 3) % 24}:${minutes}:${seconds}`;
  const [isDeleted, setIsDeleted] = useState(false);

  const onClick = () => {
    setAskToDelete(true);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreInfoRef.current && moreInfoRef.current.contains(event.target)) {
        return;
      }

      if (!ref.current && ref.current.contains(event.target) && !deleteRef.current.contains(event.target)) {
        setClicked(true);
      }

      if (ref.current && !ref.current.contains(event.target)) {
        setClicked(false);
        setAskToDelete(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={
      isDeleted === true ?
        `${style.task} ${style.deleted}` :
        style.task
    }
         ref={ref}
         onClick={() => setClicked(!clicked)}
    >

      <div className={style.status}>
        <Status status={status}/>
      </div>

      <p className={style.id}>{request.brand_id}</p>
      <p className={style.time}>{timeCreated}</p>
      <p className={style.startDate}>{request.open_date}</p>
      <p className={style.endDate}>{request.close_date}</p>
      {status === 'processing' ?
        <div className={style.processing}><span className={
          isDeleted === true ?
            '' :
            style.flare}></span></div> :
        <p className={style.cashback}>{request.cb_percent}</p>
      }

      <div className={style.delete}>
        <Delete status={status} onClick={onClick} disabled={isDeleted} ref={deleteRef}/>
      </div>

      {status !== 'processing' && isDeleted === false && clicked ?
        <MoreInfo gvm={gvm} purchaseCount={purchaseCount} totalCashback={totalCashback} ref={moreInfoRef}/> :
        <></>
      }

      {askToDelete && !isDeleted ?
        <AskToDelete id={id} brand_id={request.brand_id} status={status} setIsDeleted={setIsDeleted}
                     setAskToDelete={setAskToDelete}/> :
        <></>
      }
    </div>
  )
    ;
};

export default Task;