import React, {useEffect, useState} from "react";
import Input from "../../../generic/form/inputs/Input.jsx";
import {getBudgetCalculation} from "../../../api/userApi.js";

const InputSearch = ({setTasks, value, setValue}) => {

  const [budgetData, setBudgetData] = useState(null);
  const [errorData, setErrorData] = useState(null);

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const data = await getBudgetCalculation();
        setBudgetData(data);
        console.log(data);
      } catch (error) {
        setErrorData(error.message);
      }
    };

    fetchBudget();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);

    if (e.target.value === '') {
      setTasks(budgetData);
      return;
    }

    const arr = [];
    budgetData.map((item, index) => {
      if (item.request.brand_id.includes(e.target.value) && item.status === 'done') {
        arr.push(item);
      }
    })
    setTasks(arr.reverse());
  }

  return (
    <Input name='searchTasksById' type='text' value={value}
           inputField='Поиск по подсчетам'
           onChange={handleChange} isValid={true}
           placeholder='Id бренда'
           required={false}
           error={null}
    />
  );
};

export default InputSearch;