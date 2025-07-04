import "./styles.css";
import {allToDos} from './ToDos.js'
import {ToDo, List, lists, Priority, priorities} from './ToDos.js'
// import {lists, List, createList, generateListPage} from './projects.js'
import { generateContentPage, addListsToSideBar, createNewList} from './DOM_lists.js'
// import { generateInbox } from "./inbox.js";
import { toggleToDo } from "./completeToDo.js";
import { createToDoModal, saveModalData, createToDo, populateListOptions, populatePriorities } from "./toDoModal.js";

console.log(JSON.parse(JSON.stringify(allToDos)));
console.log([...allToDos])

const homeList = new List("Home")
const studyList = new List("Study")
const inbox = new List("inbox")
inbox.id = "1";
inbox.addToArrayOfLists()
const low = new Priority("Low")
const medium = new Priority("Medium");
const high = new Priority("High")
low.addToPrioritiesList()
medium.addToPrioritiesList()
high.addToPrioritiesList()

homeList.addToArrayOfLists()
studyList.addToArrayOfLists()
const firstToDo = new ToDo("Do Laundry", "Wash darks and whites separately. Don’t forget to fold and put away.", "", "high", "2025-07-22")
const secondToDo = new ToDo("Clean the desk", "take out all the trash from desk like papers, docs, coffe cup", "inbox", "low", "2025-07-22")
const thirdToDo = new ToDo("Water the plants", "Focus on the ones by the window—soil's looking dry.", "inbox", "medium", "2025-07-22")
const forthToDo = new ToDo("Finish CS50 Week 5 Lecture", "take notes in Notion", "inbox", "medium", "2025-07-22")
const fifthToDo = new ToDo("Buy grocceries", "buy milk, chicken, cucumbers, bread, oil, butter, ice cream", "inbox", "medium", "2025-07-22")
const sixthToDo = new ToDo("Do flashcards", "go through the list of 50 words", "inbox", "medium", "2025-07-22")
const seventhToDo = new ToDo("Debug the To Do list app", "oh there is so much to debug", "inbox", "medium", "2025-07-22")

firstToDo.addToAllToDos()
secondToDo.addToAllToDos()
thirdToDo.addToAllToDos()
forthToDo.addToAllToDos()
fifthToDo.addToAllToDos()
sixthToDo.addToAllToDos()
seventhToDo.addToAllToDos()
firstToDo.addToTheList(homeList)
fifthToDo.addToTheList(homeList)
sixthToDo.addToTheList(studyList)

// firstToDo.deleteToDo()


console.log(allToDos)
console.log(lists)

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
    let header = document.querySelector('.contentHeader')
    let headerId = header.dataset.listid
    generateContentPage(headerId)
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
        const theModal = document.querySelector(`[data-modalId="${toDoId}"]`)
        let header = document.querySelector('.contentHeader')
        let headerId = header.dataset.listid
        generateContentPage(headerId)
        theModal.close()
    }
})


// Delete to do

document.addEventListener('click', function(event){
    if(event.target.classList.contains('toDoDeleteButton')){
        let toDoid = event.target.dataset.tododeleteid
        // console.log(toDoid)
        for(const toDo of allToDos){
            if(toDo.id === toDoid){
                console.log(toDo.title)
                toDo.deleteToDo()
                let header = document.querySelector('.contentHeader')
                let headerId = header.dataset.listid
                generateContentPage(headerId)
            }
        }
    }
})