console.log('Connected!');

// Classes
class Task {
  constructor(taskName) {
    this.taskName = taskName;
  }

  static fromJSON(json) {
    return new Book(json.title, json.author, json.isbn);
  }
}


class UI {
    constructor() {
      this.form = document.getElementById('form');
  
      this.taskName = document.getElementById('task');
  
      this.tableBody = document.getElementById('table-body');
  
      this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
  
      this.taskList = [];
      this.loadTaskListFromLocalStorage();
      this.renderTaskList();
    }
  
    onFormSubmit(e) {
        console.log("clicked!")
      e.preventDefault();
  
      if (this.taskName.value == '') {
        return;
      }
  
      const task = new Task(this.taskName.value);
      this.taskList.push(task);

      this.saveTaskListToLocalStorage();
      this.renderTaskList();
  
      this.taskName.value = ''; // reset input to be blank
    }
  
    renderTaskList() {
      this.tableBody.innerHTML = '';
  
      for (let i = 0; i < this.taskList.length; i++) {
        const task = this.taskList[i];
  
        const tr = this.createTaskRow(task);
        this.tableBody.appendChild(tr);
      }
    }
  
    createTaskRow(task) {
      const tr = document.createElement('tr');
  
      const tdTask = document.createElement('td');
      const tdComplete = document.createElement('td');
      const tdActions = document.createElement('td');
  
      tdTask.innerHTML = task.taskName;

      // add complete button
      const completeButton = document.createElement('input');
      completeButton.setAttribute('type', 'radio');
      completeButton.addEventListener('click', () => {
        console.log('Complete was clicked');
      });
      tdComplete.appendChild(completeButton);

    
      // add delete buttons
      const deleteButton = document.createElement('button');
      deleteButton.setAttribute('class', 'btn btn-danger btn-sm me-1');
      deleteButton.innerHTML = 'Delete';
      deleteButton.addEventListener('click', () => {
        this.onDeleteTaskClicked(task);
      });
      tdActions.appendChild(deleteButton);
  
      tr.appendChild(tdTask);
      tr.appendChild(tdComplete);
      tr.appendChild(tdActions);
  
      return tr;
    }

    onDeleteTaskClicked(task) {
        this.filterTaskListArray(task); //????
        this.saveTaskListToLocalStorage();
        this.renderTaskList();
    }

    filterTaskListArray(task) {
        this.taskList = this.taskList.filter((currentTask) => {
          return task.taskName != currentTask.taskName;
        });
    }

    saveTaskListToLocalStorage() {
        const json = JSON.stringify(this.taskList);
        localStorage.setItem('taskList', json);
    }

    loadTaskListFromLocalStorage() {
        const json = localStorage.getItem('taskList');
        if (json) {
          const taskListArr = JSON.parse(json);
          this.taskList = taskListArr.map((task) => Task.fromJSON(task));
        }
    }
  }
  
  const ui = new UI();