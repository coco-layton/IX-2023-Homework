import React, { useState } from 'react';
//import { Task } from '../models/tasklist';

export default function TaskForm(props) {
  const [name, setName] = useState('');

  // Call a React hook that runs a function anytime a given variable/object changes
//   useEffect(() => {
//     if (props.taskToEdit) {
//       setName(props.taskToEdit.name);
//     }
//   }, [props.taskToEdit]);

  function onTaskFormSubmit(e) {
    e.preventDefault();

    if (!isValid()) {
      return;
    }

    props.onTaskCreated(name);
    setName('');

    clearInputs();
  }

  function isValid() {
    return name !== '';
  }

  function clearInputs() {
    setName('');
  }

  return (
    <div>
      <h1 className='text-center'>Task List:</h1>

      <form id="form" onSubmit={onTaskFormSubmit}>
        <div className="input-group mb-3">
          <input
            id="task-name"
            type="text"
            className="form-control"
            placeholder="Enter Task Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button className="btn btn-outline-secondary" type="submit">
            +
          </button>
        </div>
      </form>
    </div>
  );
}
