import "./styles.css";
import {allToDos} from './ToDos.js'
import {ToDo, List, lists, Priority, priorities} from './ToDos.js'
import { generateContentPage, addListsToSideBar, createNewList} from './DOM_lists.js'
import { toggleToDo } from "./completeToDo.js";
import { createToDoModal, saveModalData, createToDo, populateListOptions, populatePriorities, closeWithoutSaving } from "./toDoModal.js";
import { initialLocalStorage, updateStorage, updateListsFromLocalStorage, updateToDosFromLocalStorage } from "./storage.js";

const low = new Priority("Low")
const medium = new Priority("Medium");
const high = new Priority("High")
low.addToPrioritiesList()
medium.addToPrioritiesList()
high.addToPrioritiesList()


updateToDosFromLocalStorage()
updateListsFromLocalStorage()

generateContentPage(1)

// Adding new list and new To Do
// adding new list
const newListButton = document.getElementById("sideBarAddNewListButton")
const modalList = document.getElementById("modalAddList")
const closeModalList = document.getElementById("closeListModal")
const modalListInput = document.getElementById('listName')
// open modal for creating a new list
newListButton.addEventListener('click', () => {
    modalList.showModal()
})
closeModalList.addEventListener('click', ()=> {
    modalList.close()
})
// confirm new list
const addListButton = document.getElementById("addNewListButton")

addListButton.addEventListener('click', ()=> {
    createNewList()
    addListsToSideBar()
    modalList.close()
})

addListsToSideBar()
// Generate list page
document.addEventListener('click', function(event){
        if(event.target.classList.contains('listElement')) {
            generateContentPage(event.target.dataset.listelementid)
        }
    })


// adding new To Do
const newToDoButton = document.getElementById("sideBarAddNewToDoButton")
const modalToDo = document.getElementById("modalAddToDo")
const closeModalToDO = document.getElementById("closeToDoModal")
const toDoInputTitle = document.getElementById("toDoTitle")
const toDoDescription = document.getElementById("toDoDescription")
const toDoListSelect = document.getElementById("toDoListSelect")
const toDoPrioritySelect = document.getElementById("toDoPrioritySelect")

newToDoButton.addEventListener('click', () => {
    toDoListSelect.innerHTML = ""
    toDoPrioritySelect.innerHTML = ""
    populateListOptions()
    populatePriorities()
    modalToDo.showModal()
})
closeModalToDO.addEventListener('click', () => {
    modalToDo.close()
})
const addToDoButton = document.getElementById("addNewToDoButton")

addToDoButton.addEventListener('click', () => {
    createToDo()
    toDoInputTitle.value = ""
    toDoDescription.value = ""
    updateStorage()
    let header = document.querySelector('.contentHeader')
    let headerId = header.dataset.listid
    generateContentPage(headerId)
    modalToDo.close()
})


// Toggle to do
document.addEventListener('click', function(event){
    if(event.target.classList.contains('toDoCheckbox')){
        const checkboxId = event.target.dataset.checkboxid;
        toggleToDo(checkboxId)
    }
})

// expand to do

document.addEventListener('click', function(event){
    if(event.target.classList.contains('toDoElement')){
        let toDoId = event.target.dataset.todoelement;
        createToDoModal(toDoId)
        const theModal = document.querySelector(`[data-modalId="${toDoId}"]`)
        theModal.showModal()
    }
})

// Save to do
document.addEventListener('click', function(event){
    if(event.target.classList.contains('modalSaveButton')){
        let toDoId = event.target.dataset.savebuttonid
        saveModalData(toDoId)
        updateStorage()
        const theModal = document.querySelector(`[data-modalId="${toDoId}"]`)
        let header = document.querySelector('.contentHeader')
        let headerId = header.dataset.listid
        generateContentPage(headerId)
        theModal.close()
    }
})
// Close to do
document.addEventListener('click', function(event){
    if(event.target.classList.contains('modalCloseButton')){
        let toDoId = event.target.dataset.closebuttonid
        const theModal = document.querySelector(`[data-modalId="${toDoId}"]`)
        closeWithoutSaving(toDoId)
        theModal.close()
    }
})

// Delete to do

document.addEventListener('click', function(event){
    if(event.target.classList.contains('toDoDeleteButton')){
        let toDoid = event.target.dataset.tododeleteid
        for(const toDo of allToDos){
            if(toDo.id === toDoid){
                toDo.deleteToDo()
                let header = document.querySelector('.contentHeader')
                let headerId = header.dataset.listid
                updateStorage()
                generateContentPage(headerId)
            }
        }
    }
})