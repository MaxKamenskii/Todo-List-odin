import "./styles.css";
import {allToDos} from './createToDo.js'
import {ToDo, createNewToDo} from './createToDo.js'
import {lists, List, createList, generateListPage} from './projects.js'
import { generateInbox } from "./inbox.js";

console.log(JSON.parse(JSON.stringify(allToDos)));
console.log([...allToDos])

const homeList = new List("Home")
const studyList = new List("study")
const firstToDo = new ToDo("testToDo", "todo for testing", "June 18", "high")
const secondToDo = new ToDo("secondToDo", "todo for testing 2", "June 18", "low")
const thirdToDo = new ToDo("thirdToDo", "todo for testing 3", "June 18", "medium")
const forthToDo = new ToDo("finish to do list", "todo for testing 4", "June 22", "medium")
const fifthToDo = new ToDo("buy grocceries", "buy milk, chicken, cucumnbers, bread, oil, butter, ice cream", "June 22", "medium")
firstToDo.addToAllToDos()
secondToDo.addToAllToDos()
thirdToDo.addToAllToDos()
forthToDo.addToAllToDos()
fifthToDo.addToAllToDos()
// firstToDo.addToTheList(homeList)
// secondToDo.addToTheList(homeList)

console.log(allToDos)


document.addEventListener('DOMContentLoaded', () => {
    const inboxButton = document.getElementById('inboxButton');
    if(inboxButton) {
        inboxButton.addEventListener('click', () => {
            generateInbox()
            console.log('inbox button is working!')
        })
    }
})


// Adding new list and new To Do
// adding new list
const newListButton = document.getElementById("sideBarAddNewListButton")
const modalList = document.getElementById("modalAddList")
const closeModalList = document.getElementById("closeListModal")
const modalListInput = document.getElementById('listName')
newListButton.addEventListener('click', () => {
    modalList.showModal()
    
})
closeModalList.addEventListener('click', ()=> {
    modalList.close()
})

const addListButton = document.getElementById("addNewListButton")

addListButton.addEventListener('click', ()=> {
    console.log("addListButton is working")
    createList()
    modalListInput.value = ""
    modalList.close()
})

// adding new To Do
const newToDoButton = document.getElementById("sideBarAddNewToDoButton")
const modalToDo = document.getElementById("modalAddToDo")
const closeModalToDO = document.getElementById("closeToDoModal")
const toDoInputTitle = document.getElementById("toDoTitle")
const toDoDescription = document.getElementById("toDoDescription")

newToDoButton.addEventListener('click', () => {
    modalToDo.showModal()
})
closeModalToDO.addEventListener('click', () => {
    modalToDo.close()
})
const addToDoButton = document.getElementById("addNewToDoButton")

addToDoButton.addEventListener('click', () => {
    createNewToDo()
    toDoInputTitle.value = ""
    toDoDescription.value = ""
    modalToDo.close()
})



// Generate list page
document.addEventListener('click', function(event){
        if(event.target.classList.contains('listElement')) {
            console.log(event.target.id)
            generateListPage(event.target.id)
        }
    })