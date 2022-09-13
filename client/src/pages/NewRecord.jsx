import { useState } from 'react';
import axios from 'axios';
import { useOutletContext, useNavigate } from 'react-router-dom';
import RecordForm from '../components/RecordForm';

const NewRecord = () => {
  const navigate = useNavigate();
  const { baseUrl } = useOutletContext();
  const [errors, setErrors] = useState([]);
  const [errorObject, setErrorObject] = useState({})

  const initialRecord = {
    title: '',
    artist: '',
    description: '',
  };

  const insertRecord = (e, record) => {
    e.preventDefault();
    axios
      .post(baseUrl, record)
      .then(() => {
        setErrors([]);
        navigate('/records');
      })
      .catch((err) => {
        console.log(err);
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        const errorObj = {}
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        for (const key in errorResponse) {
          errorObj[key] = errorResponse[key].message
        }
        setErrorObject(errorObj);
        setErrors(errorArr);
      });
  };

  return (
    <RecordForm
      formText={'Add Record'}
      submitHandler={insertRecord}
      initialRecord={initialRecord}
      errors={errors}
      errorObject={errorObject}
    />
  );
};

export default NewRecord;
