import {getBudgetCalculation} from "../../api/userApi.js";
import {useEffect, useState} from "react";
import Task from "./task/Task.jsx";
import style from './tasks.module.css'

const Tasks = ({tasks, value}) => {
  const reversedTasks = [...tasks].reverse();

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

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!budgetData) {
    return <div>Loading...</div>;
  }

  const columnNames = ['статус', 'Id бренда', 'Время', 'Начало оффера', 'Окончание оффера', 'Кэшбек', '']

  return (
    <section className={style.tasks}>
      <div className={style.headerSection}>
        {columnNames.map((name, index) => (
          <div key={index} className={style.columnName}>
            <p>{name}</p>
          </div>
        ))}
      </div>

      <div className={style.tasksData}>

        {reversedTasks.length === 0 && value === '' ?
          budgetData.map((item, index) => (
            <div key={index}>
              <Task id={item.id} gvm={item.gvm} purchaseCount={item.purchaseCount} status={item.status}
                    totalCashback={item.totalCashback} request={item.request}/>
            </div>
          )) :
          reversedTasks.map((item, index) => (
            <div key={index}>
              <Task id={item.id} gvm={item.gvm} purchaseCount={item.purchaseCount} status={item.status}
                    totalCashback={item.totalCashback} request={item.request}/>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Tasks;

