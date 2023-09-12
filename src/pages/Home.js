import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  /* Create the object to store the Student */
  const [students, setStudents] = useState([]);

  /* Store id for deleting */
  const { id } = useParams();

  /* Render the table everytime we open the page */
  useEffect(() => {
    console.log("working");
    /* Loading users */
    loadStudents();
  }, []);

  /* Loading users through axios */
  const loadStudents = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/v1/student/getAllStudents"
    );
    console.log(result.data.content);
    /* Setting result to the table when rendering first time */
    setStudents(result.data.content);
  };

  /* Delete a student */
  const deleteStudent = async (id) => {
    await axios.delete(
      `http://localhost:8080/api/v1/student/deleteStudent/${id}`
    );
    loadStudents();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Loading the data to the table */}
            {students.map((student, index) => {
              return (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{student.name}</td>
                  <td>{student.address}</td>

                  {/* Creating buttons */}
                  <td>
                    {/* Turn button into a Link */}
                    {/* <button className='btn btn-primary mx-2'>View</button> */}
                    <Link
                      className="btn btn-primary mx-2"
                      to={`/viewStudent/${student.id}`}
                    >
                      View
                    </Link>
                    {/* Turn button into a Link */}
                    {/* <button className='btn btn-outline-primary mx-2'>Edit</button> */}
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/updateStudent/${student.id}`}
                    >
                      Edit
                    </Link>

                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteStudent(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
