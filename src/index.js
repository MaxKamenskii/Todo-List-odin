import "./styles.css";
import {allToDos} from './ToDos.js'
import {ToDo, List, lists} from './ToDos.js'
// import {lists, List, createList, generateListPage} from './projects.js'
import { addNewListToSideBar, generateContentPage} from './DOM_lists.js'
// import { generateInbox } from "./inbox.js";
import { toggleToDo } from "./completeToDo.js";
import { createToDoModal, saveModalData, createToDo, populateListOptions } from "./toDoModal.js";

console.log(JSON.parse(JSON.stringify(allToDos)));
console.log([...allToDos])

const homeList = new List("Home")
const studyList = new List("study")
const inbox = new List("inbox")
inbox.id = "1";
inbox.addToArrayOfLists()

homeList.addToArrayOfLists()
studyList.addToArrayOfLists()
const firstToDo = new ToDo("To Do Title", "todo description and notes", "", "June 18", "high")
const secondToDo = new ToDo("secondToDo", "todo for testing 2", "", "June 18", "low")
const thirdToDo = new ToDo("thirdToDo", "todo for testing 3", "inbox", "June 18", "medium")
const forthToDo = new ToDo("finish to do list", "todo for testing 4", "inbox", "June 22", "medium")
const fifthToDo = new ToDo("buy grocceries", "buy milk, chicken, cucumnbers, bread, oil, butter, ice cream", "inbox", "June 22", "medium")
firstToDo.addToAllToDos()
secondToDo.addToAllToDos()
thirdToDo.addToAllToDos()
forthToDo.addToAllToDos()
fifthToDo.addToAllToDos()
firstToDo.changeTitle("this is a new title for the 1st to do")
firstToDo.addToTheList(inbox)
secondToDo.addToTheList(inbox)

console.log(allToDos)
console.log(lists)


// document.addEventListener('DOMContentLoaded', () => {
//     const inboxButton = document.getElementById('inboxButton');
//     if(inboxButton) {
//         inboxButton.addEventListener('click', () => {
//             generateInbox()
//             console.log('inbox button is working!')
//         })
//     }
// })


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
    addNewListToSideBar()
    modalList.close()
})

// Generate list page
document.addEventListener('click', function(event){
        if(event.target.classList.contains('listElement')) {
            console.log(`target id ${event.target.dataset.listelementid}`)
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

newToDoButton.addEventListener('click', () => {
    toDoListSelect.innerHTML = ""
    populateListOptions()
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
    toDoListSelect.value = ""
    modalToDo.close()
})


// Toggle to do
document.addEventListener('click', function(event){
    if(event.target.classList.contains('toDoCheckbox')){
        console.log("clicked a checkbox")
        const checkboxId = event.target.dataset.checkboxid;
        console.log(checkboxId)
        toggleToDo(checkboxId)
        console.log(allToDos)
    }
})

// expand to do

document.addEventListener('click', function(event){
    if(event.target.classList.contains('toDoElement')){
        console.log("clicked a to do element")
        let toDoId = event.target.dataset.todoelement;
        console.log(`toDoId is: ${toDoId}`)
        createToDoModal(toDoId)
        const theModal = document.querySelector(`[data-modalId="${toDoId}"]`)
        theModal.showModal()
    }
})

document.addEventListener('click', function(event){
    if(event.target.classList.contains('modalSaveButton')){
        let toDoId = event.target.dataset.savebuttonid
        console.log(`save button id is: ${toDoId}`)
        saveModalData(toDoId)
        
    }
})
