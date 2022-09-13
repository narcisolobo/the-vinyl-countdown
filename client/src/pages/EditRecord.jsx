import { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext, useNavigate, useParams } from 'react-router-dom';
import RecordForm from '../components/RecordForm';

const EditRecord = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { baseUrl } = useOutletContext();
  const [record, setRecord] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => {
        setRecord(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateRecord = (e, record) => {
    e.preventDefault();
    axios
      .put(`${baseUrl}/${id}`, record)
      .then(() => navigate('/records'))
      .catch((err) => console.log(err));
  };

  return (
    record && <RecordForm formText={'Edit Record'} submitHandler={updateRecord} initialRecord={record} />
  );
};

export default EditRecord;
