import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateStudent() {
  /* Set navigation to the Home Page after submittiong */
  let navigate = useNavigate();

  /* Store the id */
  const { id } = useParams();

  /* Store the data of fields in a state / object */
  const [student, setStudent] = useState({
    name: "",
    address: "",
  });

  /* Deconstruct the object (Describe in input field value attribute) */
  const { name, address } = student;

  /* Describe at input field onChange */
  const onInputChange = (e) => {
    /* Setting data to student object */
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  /* Render the data */
  useEffect(() => {
    loadStudent();
  }, []);

  /* Save object in database */
  const onSubmit = async (e) => {
    e.preventDefault();
    /* Passing the data through axios */
    await axios.put(
      `http://localhost:8080/api/v1/student/updateStudent/${id}`,
      student
    );
    navigate("/");
  };

  /* Loading data */
  const loadStudent = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/v1/student/searchStudent/${id}`
    );
    setStudent(result.data.content);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Student</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Kasun"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Panadura"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Update
            </button>
            {/* Turn button into a Link to set the cancel button */}
            {/* <button type='submit' className='btn btn-outline-danger mx-2'>Cancel</button> */}
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
