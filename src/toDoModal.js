import {allToDos} from './createToDo.js'
import {ToDo, createNewToDo} from './createToDo.js'
import {lists, List, createList, generateListPage} from './projects.js'

const container = document.getElementsByClassName("container")

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
    const modalSaveButton = document.createElement('button')
    modalSaveButton.classList.add("modalSaveButton")
    modalSaveButton.setAttribute('data-saveButtonId', elId)
    modalSaveButton.innerHTML = "save"
    content.append(toDoModal)
    toDoModal.appendChild(modalDiv)
    modalDiv.append(modalTitle, modalDescription, modalDueDate, modalPriority, modalSaveButton)
    for(const toDoInstance of allToDos){
        if(toDoInstance.id === elId){
            modalTitle.innerHTML = toDoInstance.title;
            modalDescription.innerHTML = toDoInstance.description;
            modalDueDate.innerHTML = toDoInstance.dueDate;
            modalPriority.innerHTML = toDoInstance.priority
        }
    }
}


export function saveModalData(elId) {
    const modalTitle = document.querySelector(`[data-modalTitleId="${elId}"]`)
    console.log(`Modal title is: ${modalTitle.innerHTML}`)

}