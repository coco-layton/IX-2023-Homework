import React from 'react';

export default function TaskTable(props) {
  return (
    <div>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Complete</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.tasks.map((task) => {
            return (
              <tr key={task.name}>
                <td>{task.name}</td>
                <td>
                    <input
                        type="radio"
                    >
                    </input>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm me-1"
                    onClick={() => props.onTaskDelete(task)}
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
  );
}