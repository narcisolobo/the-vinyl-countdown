import { useState } from 'react';

const RecordForm = (props) => {
  const { submitHandler, initialRecord, formText, errors, errorObject } = props;
  const [formState, setFormState] = useState(initialRecord);

  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {errors &&
        errors.map((error, idx) => {
          return <p key={idx}>{error}</p>;
        })}
      <div className="card">
        <h5 className="card-header">{formText}</h5>
        <div className="card-body">
          <form onSubmit={(e) => submitHandler(e, formState)}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title:
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control form-control-sm"
                value={formState.title}
                onChange={changeHandler}
              />
              {errorObject.title ? (
                <span className="form-text text-danger">
                  {errorObject.title}
                </span>
              ) : (
                ''
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="artist" className="form-label">
                Artist:
              </label>
              <input
                type="text"
                name="artist"
                id="artist"
                className="form-control form-control-sm"
                value={formState.artist}
                onChange={changeHandler}
              />
              {errorObject.artist ? (
                <span className="form-text text-danger">
                  {errorObject.artist}
                </span>
              ) : (
                ''
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <textarea
                className="form-control"
                name="description"
                id="description"
                value={formState.description}
                onChange={changeHandler}
              ></textarea>
              {errorObject.description ? (
                <span className="form-text text-danger">
                  {errorObject.description}
                </span>
              ) : (
                ''
              )}
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary btn-sm">{formText}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecordForm;
