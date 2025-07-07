import {allToDos} from './ToDos.js'
import {ToDo, createNewToDo, lists, priorities} from './ToDos.js'
// import {lists, List, createList, generateListPage} from './projects.js'
import { generateContentPage } from './DOM_lists.js';

const container = document.getElementsByClassName("container")
export function createToDo() {
    let toDoTitle = document.getElementById("toDoTitle").value;
    let toDoDescription = document.getElementById("toDoDescription").value;
    let toDoList = document.getElementById("toDoListSelect").value;
    let toDoPriority = document.getElementById("toDoPrioritySelect").value;
    let toDoDueDate = document.getElementById("toDoDueDate").value
    
    if(toDoTitle != ""){
        let newToDoInstance = new ToDo(toDoTitle, toDoDescription, toDoList, toDoPriority, toDoDueDate)
        newToDoInstance.addToAllToDos()
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
        if(listEl.id != 2){
            console.log(listEl.name)
            listEl.populate("toDoListSelect")
        }
        
    }
}
export function populatePriorities(){
    for(const priority of priorities){
        priority.populate("toDoPrioritySelect")
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
    const modalDescription = document.createElement('textarea')
    modalDescription.classList.add('modalDescription')
    modalDescription.setAttribute('data-modalDescriptionId', elId)
    modalDescription.setAttribute('placeholder', 'Notes')
    const modalDueDate = document.createElement('input')
    modalDueDate.setAttribute('type', 'date')
    modalDueDate.setAttribute('data-modalDueDateId', elId)
    const modalPriority = document.createElement('select')
    modalPriority.setAttribute('data-modalPriorityId', elId)
    const modalList = document.createElement('select')
    modalList.setAttribute('data-modalListId', elId)
    const modalSaveButton = document.createElement('button')
    modalSaveButton.classList.add("modalSaveButton")
    modalSaveButton.setAttribute('data-saveButtonId', elId)
    modalSaveButton.innerHTML = "Save"
    const header = document.querySelector(".contentHeader")
    let headerId = header.dataset.listid
    if(headerId === "2"){
        console.log(`Header dataset ${header.dataset.listid}`)
        modalSaveButton.innerHTML = "Restore"
    } else {
        modalSaveButton.innerHTML = "Save"
    }
    const closeModalButton = document.createElement('button')
    closeModalButton.classList.add("modalCloseButton")
    closeModalButton.setAttribute('data-closeButtonId', elId)
    closeModalButton.innerHTML = "Close"
    const modalButtonsDiv = document.createElement('div')
    modalButtonsDiv.classList.add('modalButtonsDiv')
    const inputDiv = document.createElement('div')
    inputDiv.classList.add('inputDiv')
    const dateDiv = document.createElement('div')
    dateDiv.classList.add('inputDivElement')
    const dateLabel = document.createElement('div')
    dateLabel.innerHTML = "Date"
    dateDiv.append(dateLabel, modalDueDate)
    const listDiv = document.createElement('div')
    const listLabel = document.createElement('div')
    listLabel.innerHTML = "List"
    listDiv.append(listLabel, modalList)
    listDiv.classList.add('inputDivElement')
    const priorityDiv = document.createElement('div')
    const priorityLabel = document.createElement('div')
    priorityLabel.innerHTML = "Priority"
    priorityDiv.classList.add('inputDivElement')
    priorityDiv.append(priorityLabel, modalPriority)
    inputDiv.append(dateDiv, listDiv, priorityDiv)
    content.append(toDoModal)
    toDoModal.appendChild(modalDiv)
    modalButtonsDiv.append(modalSaveButton, closeModalButton)
    modalDiv.append(modalTitle, modalDescription, inputDiv, modalButtonsDiv)
    for(const toDoInstance of allToDos){
        if(toDoInstance.id === elId){
            modalTitle.innerHTML = toDoInstance.title;
            modalDescription.innerHTML = toDoInstance.description;
            modalDueDate.innerHTML = toDoInstance.dueDate;
            modalDueDate.value = toDoInstance.dueDate;
            modalPriority.innerHTML = toDoInstance.priority;
            modalList.innerHTML = toDoInstance.list;
        }
    }
    const predetermendPriority = modalPriority.innerHTML
    for(const priority of priorities){
        let option = document.createElement('option')
        console.log("Populating modal")
        console.log(option)
        option.text = priority.name;
        option.value = priority.name.toLowerCase()
        console.log(`Predetermened option is:${predetermendPriority}`)
        if(option.value === predetermendPriority.toLocaleLowerCase()){
            option.setAttribute('selected', 'selected')
        }
        modalPriority.appendChild(option)
    }
    const predetermendList = modalList.innerHTML
    for(const list of lists){
        if(list.id != "2"){
            let option = document.createElement('option')
            console.log("Populating list option")
            option.text = list.name
            option.value = list.name.toLowerCase()
            console.log(`Predetermend option is ${predetermendList}`)
            if(option.value === predetermendList.toLocaleLowerCase()){
                option.setAttribute('selected', 'selected')
            }
            modalList.appendChild(option)
        }
    }
}


export function saveModalData(elId) {

    const modalTitleElement = document.querySelector(`[data-modalTitleId="${elId}"]`)
    const modalDescriptionElement = document.querySelector(`[data-modalDescriptionId="${elId}"]`)
    const toDoElement = document.querySelector(`[data-todoelement="${elId}"]`)
    console.log(`Modal title element: ${modalTitleElement}`)
    const modalPriorityElement = document.querySelector(`[data-modalPriorityId="${elId}"]`)
    const modalListElement = document.querySelector(`[data-modalListId="${elId}"]`)
    const modalDateElement = document.querySelector(`[data-modalDueDateId="${elId}"]`)
    // console.log(`Modal title is: ${modalTitle.value}`)
    for(const toDoEl of allToDos){
        if(toDoEl.id === elId){
            // console.log(`Title before changing: ${toDoEl.title}`)
            toDoEl.title = modalTitleElement.value
            toDoEl.priority = modalPriorityElement.value
            toDoEl.list = modalListElement.value
            toDoEl.dueDate = modalDateElement.value
            // console.log(`Title after changing: ${toDoEl.title}`)
            console.log(toDoEl.description)
            toDoEl.description = modalDescriptionElement.value
            let childDiv = toDoElement.children[1]
            console.log(childDiv)
            childDiv.innerHTML = toDoEl.title
        }
    }

}

export function closeWithoutSaving(elId) {
    const modalTitleElement = document.querySelector(`[data-modalTitleId="${elId}"]`)
    const modalDescriptionElement = document.querySelector(`[data-modalDescriptionId="${elId}"]`)
    const toDoElement = document.querySelector(`[data-todoelement="${elId}"]`)
    console.log(`Modal title element: ${modalTitleElement}`)
    const modalPriorityElement = document.querySelector(`[data-modalPriorityId="${elId}"]`)
    const modalListElement = document.querySelector(`[data-modalListId="${elId}"]`)
    const modalDateElement = document.querySelector(`[data-modalDueDateId="${elId}"]`)
    for(const toDoEl of allToDos){
        if(toDoEl.id === elId){
            modalTitleElement.value = toDoEl.title
            modalListElement.value = toDoEl.list
            modalDateElement.value = toDoEl.dueDate
            modalDescriptionElement.value = toDoEl.description
            let childDiv = toDoElement.children[1]
            childDiv.innerHTML = toDoEl.title
        }
    }
}