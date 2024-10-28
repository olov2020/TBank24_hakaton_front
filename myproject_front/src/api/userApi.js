import {$host} from './axiosApi.js'
import {jwtDecode} from 'jwt-decode'
import axios from "axios";

export const deleteTaskById = async ({id}) => {
  const response = await axios.delete(`http://api.tbank.d0gied.ru/budget-calculation/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  localStorage.setItem('token', data.accessToken)
  return jwtDecode(data.accessToken)
}

export const cancelTaskById = async ({id}) => {
  const {data} = await $host.post(`http://api.tbank.d0gied.ru/budget-calculation/${id}/cancel`, {}, {
    headers: {
      'content-type': 'application/json'
    }
  })

  localStorage.setItem('token', data.accessToken)
  return jwtDecode(data.accessToken)
}

export const getBudgetCalculation = async () => {
  const {data} = await $host.get(`http://api.tbank.d0gied.ru/budget-calculations`);
  return data;
}

export const createBudgetTask = async ({brand_id, clientsFileKey, open_date, cb_percent, close_date}) => {
  const {data} = await $host.post('http://api.tbank.d0gied.ru/budget-calculation', {
    brand_id,
    clientsFileKey,
    open_date,
    cb_percent,
    close_date
  }, {
    headers: {
      'content-type': 'application/json'
    }
  })

  localStorage.setItem('token', data.accessToken)
  return jwtDecode(data.accessToken)
}
