console.log("Module loaded");
export const allToDos = [];

export class ToDo {
    constructor(title, description, dueDate, priority, list, done) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.list = list;
    }
}

export function addToAllToDos(title, description, dueDate, priority) {
    const toDo = new ToDo(title, description, dueDate, priority)
    allToDos.push(toDo)
}

export function deleteToDo(title) {
    const indexOfToDo = allToDos.findIndex(todo => todo.title === title)
    if (indexOfToDo !== -1) {
        allToDos.splice(indexOfToDo, 1)
    }
}

export function addToTheList(toDoTitle, listName) {
    let indexOfToDo = allToDos.findIndex(todo => todo.title === toDoTitle)
    allToDos[indexOfToDo].list = listName.name;
    listName.ToDos.push(allToDos[indexOfToDo]);
}

export function setPriority(toDoTitle, priority) {
    let indexOfToDo = allToDos.findIndex(todo => todo.title === toDoTitle)
    allToDos[indexOfToDo].priority = priority
    console.log(allToDos[indexOfToDo].priority)
}
