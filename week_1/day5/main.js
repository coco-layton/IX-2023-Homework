console.log('Connected!');

// Classes

class Task {
  constructor(taskName) {
    this.taskName = taskName;
  }
}


class UI {
    constructor() {
      this.form = document.getElementById('form');
  
      this.taskName = document.getElementById('task');
  
      this.tableBody = document.getElementById('table-body');
  
      this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
  
      this.tasks = [];
  
      this.renderTaskList();
    }
  
    onFormSubmit(e) {
        console.log("clicked!")
      e.preventDefault();
  
      if (this.taskName.value == '') {
        return;
      }
  
      const task = new Task(this.taskName.value);
      this.tasks.push(task);
      this.renderTaskList();
  
      this.taskName.value = ''; // reset input to be blank
    }
  
    renderTaskList() {
      this.tableBody.innerHTML = '';
  
      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
  
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
      //completeButton.setAttribute('class', 'form-check-input');
      completeButton.addEventListener('click', () => {
        console.log('Complete was clicked');
      });
      tdComplete.appendChild(completeButton);

    
      // add action buttons
      const actionButtons = this.createActionButtons();
      tdActions.appendChild(actionButtons[0]);
      tdActions.appendChild(actionButtons[1]);
  
      tr.appendChild(tdTask);
      tr.appendChild(tdComplete);
      tr.appendChild(tdActions);
  
      return tr;
    }
  
    createActionButtons() {
      const deleteButton = document.createElement('button');
      const editButton = document.createElement('button');
  
      deleteButton.setAttribute('class', 'btn btn-danger btn-sm me-1');
      deleteButton.innerHTML = 'Delete';
      deleteButton.addEventListener('click', () => {
        console.log('Delete was clicked');
      });
  
      editButton.setAttribute('class', 'btn btn-warning btn-sm ms-1');
      editButton.innerHTML = 'Edit';
      editButton.addEventListener('click', () => {
        console.log('Edit was clicked');
      });
  
      return [deleteButton, editButton];
    }
  }
  
  const ui = new UI();