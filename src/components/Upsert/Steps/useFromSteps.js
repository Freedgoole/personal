import { useState } from 'react';

const useForm = (selectedValue) => {
  const [values, setValues] = useState();
  const [errors, setErrors] = useState();

  const handleChange = (event, params) => {
    let name;
    let value;
      if(event.target) {
        name = event.target.name;
        value = event.target.value;
      } else {
        name = event
        value = params
      }
    
    let valid = validationForm(name, value)
    setValues(values => ({ ...values, [name]: value }));
    setErrors(errors => ({ ...errors, [name]: valid }));
  };
  return {
    handleChange,
    values,
    setValues,
    errors
  }
};

export default useForm;

function validationForm(name, value) { 
  if(name === 'code') {
    return value.length === 0 || (value.length >= 5 && value.length <= 10)
  }
  if(name === 'name') {
    return value.length === 0 || (value.length >= 5 && value.length <= 100)
  }
  if(name === 'price') {
    return value >= 0.01 && value <= 1000000
  }
  if(name === 'shelfLife') {
    return value >= 1 && value <= 1000
  }
  if(name === 'compositionAndFormOfRelease') {
    return value.length === 0 || (value.length >= 0 && value.length <= 2000)
  }
  if(name === 'indication' ) {
    return value.length === 0 || (value.length >= 0 && value.length <= 2000)
  }
  if(name === 'сontraindications') {
    return value.length === 0 || (value.length >= 0 && value.length <= 2000)
  }
  //
  //
 }