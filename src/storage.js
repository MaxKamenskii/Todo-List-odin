import {allToDos} from './ToDos.js'
import {ToDo, List, lists, Priority, priorities} from './ToDos.js'
import { generateContentPage, addListsToSideBar, createNewList} from './DOM_lists.js'
import { createToDoModal, saveModalData, createToDo, populateListOptions, populatePriorities, closeWithoutSaving } from "./toDoModal.js";

// saving current list of todos to local storage

// saving new to do to localStorage
const addToDoButton = document.getElementById("addNewToDoButton")
//check whether there is data of todos in local storage
// and if there is, then create classes of these todos and add them to the list of all todos

const listOfTodos = []
function generateDefaultToDos(){
    const firstToDo = { title: "Do Laundry", description: "Wash darks and whites separately. Don’t forget to fold and put away.", list: "", priority: "high", dueDate: "2025-07-22" }
    const secondToDo = { title: "Clean the desk", description: "take out all the trash from desk like papers, docs, coffe cup", list: "inbox", priority: "low", dueDate: "2025-07-22" }
    const thirdTodo = { title: "Water the plants", description: "Focus on the ones by the window—soil's looking dry.", list: "inbox", priority: "medium", dueDate: "2025-07-22" }
    const forthToDo = { title: "Finish CS50 Week 5 Lecture", description: "take notes in Notion", list: "inbox", priority: "medium", dueDate: "2025-07-22" }
    const fifthToDo = { title: "Buy grocceries", description: "buy milk, chicken, cucumbers, bread, oil, butter, ice cream", list: "inbox", priority: "high", dueDate: "2025-07-22" }
    const sixthToDo = { title: "Do flashcards", description: "go through the list of 50 words", list: "inbox", priority: "low", dueDate: "2025-07-22" }
    const seventhToDo = { title: "Debug the To Do list app", description: "oh there is so much to debug", list: "inbox", priority: "low", dueDate: "2025-07-22" }
    listOfTodos.push(firstToDo, secondToDo, thirdTodo, forthToDo, fifthToDo, sixthToDo, seventhToDo)
}

function updateAllToDosFromLocalStorage(){
        const allToDosJSON = JSON.parse(localStorage.getItem('listOfTodos'))
        console.log("allToDosJSON")
        console.log(allToDosJSON)
        console.log(allToDosJSON[1].title)
        for(let i = 0; i < allToDosJSON.length; i++){
            const title = allToDosJSON[i].title;
            const description = allToDosJSON[i].description
            const dueDate = allToDosJSON[i].dueDate
            const priority = allToDosJSON[i].priority
            const list = allToDosJSON[i].list
            const done = allToDosJSON[i].done
            let toDofromStorage = new ToDo (title, description, list, priority, dueDate, done)
            toDofromStorage.addToAllToDos();
        }
        // console.log(toDofromStorage)
        console.log("updateToDosFromLocalStorage is working")
        console.log(allToDos)
    }
export function updateToDosFromLocalStorage(){
    if(!JSON.parse(localStorage.getItem('listOfTodos'))){
        generateDefaultToDos()
        localStorage.setItem('listOfTodos', JSON.stringify(listOfTodos))
        updateAllToDosFromLocalStorage()
    } else
    if(JSON.parse(localStorage.getItem('listOfTodos'))){
        updateAllToDosFromLocalStorage()
    }
}

export function initialLocalStorage(){
    if(JSON.parse(localStorage.getItem('listOfTodos'))){
        const allToDosJSON = JSON.parse(localStorage.getItem('listOfTodos'))
        for(let i = 0; i < allToDosJSON; i++){
            allToDos[i] = allToDosJSON[i]
            console.log('allToDos after initialization')
            console.log(allToDos)
        }
    } else {
        const allToDosJSON = []
        console.log("else")
    }
}

export function updateStorage() {
    const allToDosJSON = JSON.stringify(allToDos)
    localStorage.setItem('listOfTodos', allToDosJSON)
    const listsJSON = JSON.stringify(lists)
    localStorage.setItem('listOfLists', listsJSON)
}