
import * as action from './ValidationAction'

const validateEmail = (email) => {
   const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return email === '' ? null : emailPattern.test(email)
}

const validatePassword = (password) => {
  const passwordPattern = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,25})$/;
  return password === '' ? null : passwordPattern.test(password)
}


export const validation = (input, value) => {  
  switch(input.toUpperCase()){
    case(action.EMAIL): return validateEmail(value);
    case(action.PASSWORD): return validatePassword(value);
    default: return null
  }
}


export const updateObject = (oldObject, newObject) => {
  return {
    ...oldObject,
    ...newObject
  }
}

export const isEmpty = (value) => {
  return value === undefined ||  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);
}
