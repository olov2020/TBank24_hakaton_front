import style from './askToDelete.module.css'
import ButtonUndo from "../../../../button/ButtonUndo.jsx";
import ButtonDo from "../../../../button/ButtonDo.jsx";
import {cancelTaskById, deleteTaskById, getBudgetCalculation} from "../../../../../api/userApi.js";
import {useEffect, useState} from "react";

const AskToDelete = ({id, brand_id, status, setIsDeleted, setAskToDelete}) => {

  const [toDelete, setToDelete] = useState(false);

  const onClickUndo = () => {
    setAskToDelete(false);
  }

  useEffect(() => {
    const cancelTask = async () => {
      try {
        const data = await cancelTaskById({id});
        console.log(data);
      } catch (error) {
      }
    };

    const deleteTask = async () => {
      try {
        const data = await deleteTaskById({id});
        console.log(data);
      } catch (error) {
      }
    };

    if (status === 'processing') {
      cancelTask();
      console.log(id);
      console.log('completed canceling')
    } else {
      deleteTask();
      console.log(id);
      console.log('completed delete')
    }
  }, [toDelete]);

  const onClickDo = async () => {
    setIsDeleted(true);
    setToDelete(true);
  };

  return (
    <section className={style.section}>
      {status === 'processing' ?
        <p>Отменить подсчет {brand_id}</p> :
        <p>Удалить подсчет {brand_id}?</p>
      }

      <div className={style.buttons}>
        <ButtonUndo text='Отмена' onClick={onClickUndo} status='undo'/>
        <ButtonDo text='Да' onClick={onClickDo} status='do'/>
      </div>
    </section>
  );
};

export default AskToDelete;