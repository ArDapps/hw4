import React from 'react';

const TableEmp = ({ posts, tableName, DeleteEmp }) => {
  return (
    <div className="container">
      <h1>{tableName}</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">ROLE</th>
            <th scope="col">Delete?</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((Emp) => (
            <tr key={Emp.id}>
              <th scope="row">{Emp.id}</th>
              <td>{Emp.title}</td>
              <td>{Emp.body}</td>
              <td>
                <button
                  type="button"
                  onClick={() => DeleteEmp(Emp.id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableEmp;
