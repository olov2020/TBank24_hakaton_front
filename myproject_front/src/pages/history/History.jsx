import Tasks from "../../generic/tasks/Tasks.jsx";
import style from './history.module.css';
import styleApp from '../../app.module.css';
import InputSearch from "./inputSearch/InputSearch.jsx";
import {useState} from "react";

const History = () => {

  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState('');

  return (
    <main className={`${style.main} ${styleApp.pageContent}`}>
      <h2 className={style.header}>Управление подсчетами</h2>

      <InputSearch setTasks={setTasks} setValue={setValue} value={value}/>

      <Tasks tasks={tasks} value={value}/>
    </main>
  )
};

export default History;