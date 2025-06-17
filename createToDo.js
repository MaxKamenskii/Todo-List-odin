console.log("Module loaded");
export const allToDos = [];

export class ToDo {
    constructor(title, description, dueDate, priority, list) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.list = list
    }
}

export function addToTheList(title, description, dueDate, priority) {
    const toDo = new ToDo(title, description, dueDate, priority)
    allToDos.push(toDo)
}

export function deleteToDo(title) {
    const indexOfToDo = allToDos.findIndex(todo => todo.title === title)
    if (indexOfToDo !== -1) {
        allToDos.splice(indexOfToDo, 1)
    }
}