import { useOutletContext, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShowRecord = () => {
  const { id } = useParams();
  const { baseUrl } = useOutletContext();
  const [record, setRecord] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => setRecord(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="card">
      <h5 className="card-header">Record Details</h5>
      {record && (
        <div className="card-body">
          <h5 className="card-title">Title: {record.title}</h5>
          <h6>Artist: {record.artist}</h6>
          <p>Description: {record.description}</p>
        </div>
      )}
    </div>
  );
};

export default ShowRecord;
