import { Link, useOutletContext } from 'react-router-dom';
import axios from 'axios';

const AllRecords = () => {
  const { baseUrl, records } = useOutletContext();

  const deleteRecord = (id) => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <table className="table table-striped table-hover table-bordered">
      <thead>
        <tr>
          <th>Album Title</th>
          <th>Artist</th>
          <th className="text-end">Actions</th>
        </tr>
      </thead>
      <tbody>
        {records &&
          records.map((record) => {
            return (
              <tr key={record._id}>
                <td>
                  <Link to={`/records/${record._id}`}>{record.title}</Link>
                </td>
                <td>{record.artist}</td>
                <td className="text-end">
                  <Link
                    to={`/records/${record._id}/edit`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteRecord(record._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default AllRecords;
