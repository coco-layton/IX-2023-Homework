import './App.css';
import { useState, useEffect } from 'react';
import { Task } from './models/tasklist';

import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './components/TaskForm';
import TaskTable from './components/TaskTable';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasksFromLocalStorage();
  }, []);

  useEffect(() => {
    saveTasksToLocalStorage();
  }); //, [tasks]

  function onTaskCreated(name) {
    const task = new Task(name);
    setTasks([...tasks, task]);
  }

  function onTaskDelete(task) {
    setTasks(tasks.filter((x) => x.name !== task.name));
  }

  // function onTaskCompleteToggle(taskName) {
  //   // toggle the task complete state
  //   const taskToToggle = tasks.find((task) => task.name === taskName);
  //   taskToToggle.complete = !taskToToggle.complete;

  //   // update the tasks state with the new task
  //   setTasks(
  //     tasks.map((task) => {
  //       return task.name === taskName ? taskToToggle : task;
  //     })
  //   );
  // }

  function saveTasksToLocalStorage() {
    const json = JSON.stringify(tasks);
    localStorage.setItem('tasks', json);
  }

  function loadTasksFromLocalStorage() {
    const json = localStorage.getItem('tasks');
    if (json) {
      const taskArr = JSON.parse(json);
      if (taskArr.length) {
        setTasks(taskArr.map((x) => Task.fromJSON(x)));
      }
    }
  }

  return (
    <div className="m-5">
      <div className="card p-4">
        <TaskForm onTaskCreated={onTaskCreated}/>
        <TaskTable
          tasks={tasks}
          onTaskDelete={onTaskDelete}
          //onTaskCompleteToggle={onTaskCompleteToggle}
        />
      </div>
    </div>
  );
}

export default App;
