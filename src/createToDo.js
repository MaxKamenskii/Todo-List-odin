console.log("Module loaded");
export const allToDos = [];

export class ToDo {
    constructor(title, description, dueDate, priority, list, done) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.list = list;
        this.done = done;
        this.id = crypto.randomUUID()
    }
    addToAllToDos() {
        this.done = false;
        allToDos.push(this)
    }
    deleteToDo(){
        const indexOfToDo = allToDos.findIndex(todo => todo.title === this.title)
        if (indexOfToDo !== -1) {
        allToDos.splice(indexOfToDo, 1)
        }
    }
    addToTheList(listName) {
        if(allToDos.includes(this)) {
        this.list = listName.name;
        let id = this.id
        listName.ToDos.push(id)
        } else {
            console.log("The ToDo has been deleted")
        }
    }
    setPriority(newPriority){
        this.priority = newPriority
    }
    toggleDoneStatus() {
        if(this.done === false){
            this.done = true
        } else {
            this.done = false
        }
    }
}

export function createNewToDo() {
    let toDoTitle = document.getElementById("toDoTitle").value;
    let toDoDescription = document.getElementById("toDoDescription").value;
    
    if(toDoTitle != ""){
        let newToDoInstance = new ToDo(toDoTitle, toDoDescription)
        allToDos.push(newToDoInstance)
        console.log(allToDos)
    } else {
        alert("please provide a title for To Do")
    }
    
}