import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewStudent() {
  /* Load details into fields */
  const [student, setStudent] = useState({
    name: "",
    address: "",
  });

  /* Store the user */
  const { id } = useParams();

  /* Render the data */
  useEffect(() => {
    loadStudent();
  }, []);

  /* Load Student */
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
          <h2 className="text-center m-4">Student Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Student id : {student.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name : </b>
                  {student.name}
                </li>
                <li className="list-group-item">
                  <b>Address : </b>
                  {student.address}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
