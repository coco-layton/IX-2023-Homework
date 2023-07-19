export class Task {
    constructor(name) {
      this.name = name;
    }
  
    static fromJSON(json) {
      return new Task(json.name);
    }
  }