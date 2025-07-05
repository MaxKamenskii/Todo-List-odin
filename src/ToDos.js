console.log("Module loaded");
export const allToDos = [];
export const lists = []
export const priorities = []

export class ToDo {
    constructor(title, description, list, priority, dueDate, done) {
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
        // const indexOfToDo = allToDos.findIndex(todo => todo.title === this.title)
        // if (indexOfToDo !== -1) {
        // allToDos.splice(indexOfToDo, 1)
        // }
        this.list = "trash"
    }
    addToTheList(listName) {
        if(allToDos.includes(this)) {
        this.list = listName.name;
        // let id = this.id
        // listName.ToDos.push(id)
        } else {
            console.log("The ToDo has been deleted")
        }
    }
    setPriority(newPriority){
        this.priority = newPriority
    }
    doneStatusDone(){
        this.done = true
    }
    doneStatusNotDone(){
        this.done = false
    }
    toggleDoneStatus() {
        if(this.done === false){
            this.done = true
        } else {
            this.done = false
        }
    }
    changeTitle(newTitle) {
        this.title = newTitle
    }
    changeDescription(newDescription) {
        this.description = newDescription
    }
    changeList(newList) {
        this.list = newList;
    }
}

export class List{
    constructor(name) {
        this.name = name;
        this.id = crypto.randomUUID()
    }
    addToArrayOfLists(){
        lists.push(this)
    }
    populate(select){
        // The parameter is the id of the element you want to populate
        let selectEl = document.getElementById(select)
        let option = document.createElement('option')
        option.text = this.name;
        option.value = this.name.toLowerCase()
        selectEl.add(option)
    }
}

export class Priority{
    constructor(name) {
        this.name = name;
    }
    addToPrioritiesList(){
        priorities.push(this)
    }
    populate(select){
        let selectEl = document.getElementById(select)
        let option = document.createElement('option')
        option.text = this.name;
        option.value = this.name.toLowerCase()
        selectEl.add(option)
    }
    populateModal(selectElement){
        let option = document.createElement('option')
        console.log("Populating modal")
        console.log(option)
        option.text = this.name;
        option.value = this.name.toLowerCase()
        selectElement.add(option)
        console.log(selectElement)
    }
}