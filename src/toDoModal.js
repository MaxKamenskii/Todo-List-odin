import {allToDos} from './ToDos.js'
import {ToDo, createNewToDo, lists} from './ToDos.js'
// import {lists, List, createList, generateListPage} from './projects.js'

const container = document.getElementsByClassName("container")

export function createToDo() {
    let toDoTitle = document.getElementById("toDoTitle").value;
    let toDoDescription = document.getElementById("toDoDescription").value;
    let toDoList = document.getElementById("toDoListSelect").value;
    
    if(toDoTitle != ""){
        let newToDoInstance = new ToDo(toDoTitle, toDoDescription, toDoList)
        allToDos.push(newToDoInstance)
        console.log(allToDos)
    } else {
        alert("please provide a title for To Do")
    }
}

export function populateListOptions(){
    console.log("populateListOption function fired")
    console.log(`List of lists: ${lists}`)
    console.log(lists[0].name)
    for(const listEl of lists){
        console.log(listEl.name)
        listEl.populate("toDoListSelect")
    }
}

export function createToDoModal(elId){
    const content = document.getElementById("content")
    const toDoModal = document.createElement('dialog')
    toDoModal.setAttribute('data-modalId', elId)
    toDoModal.classList.add('toDoModal')
    const modalDiv = document.createElement('div')
    modalDiv.classList.add('modalDiv')
    modalDiv.setAttribute('data-modalDivId', elId)
    const modalTitle = document.createElement('textarea')
    modalTitle.classList.add('modalTitle')
    modalTitle.setAttribute('data-modalTitleId', elId)
    const modalDescription = document.createElement('div')
    modalDescription.classList.add('modalDescription')
    modalDescription.setAttribute('data-modalDescriptionId', elId)
    const modalDueDate = document.createElement('div')
    modalDueDate.setAttribute('data-modalDueDateId', elId)
    const modalPriority = document.createElement('div')
    modalPriority.setAttribute('data-modalPriorityId', elId)
    const modalList = document.createElement('div')
    modalList.setAttribute('data-modalListId', elId)
    const modalSaveButton = document.createElement('button')
    modalSaveButton.classList.add("modalSaveButton")
    modalSaveButton.setAttribute('data-saveButtonId', elId)
    modalSaveButton.innerHTML = "save"
    content.append(toDoModal)
    toDoModal.appendChild(modalDiv)
    modalDiv.append(modalTitle, modalDescription, modalDueDate, modalPriority, modalList, modalSaveButton)
    for(const toDoInstance of allToDos){
        if(toDoInstance.id === elId){
            modalTitle.innerHTML = toDoInstance.title;
            modalDescription.innerHTML = toDoInstance.description;
            modalDueDate.innerHTML = toDoInstance.dueDate;
            modalPriority.innerHTML = toDoInstance.priority;
            modalList.innerHTML = toDoInstance.list;
        }
    }
}


export function saveModalData(elId) {
    const modalTitle = document.querySelector(`[data-modalTitleId="${elId}"]`)
    console.log(`Modal title is: ${modalTitle.innerHTML}`)

}