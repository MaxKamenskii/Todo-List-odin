import {allToDos} from './ToDos.js'
import {ToDo, List, lists, Priority, priorities} from './ToDos.js'
import { generateContentPage, addListsToSideBar, createNewList} from './DOM_lists.js'
import { createToDoModal, saveModalData, createToDo, populateListOptions, populatePriorities, closeWithoutSaving } from "./toDoModal.js";

// saving current list of todos to local storage

// saving new to do to localStorage
const addToDoButton = document.getElementById("addNewToDoButton")
//check whether there is data of todos in local storage
// and if there is, then create classes of these todos and add them to the list of all todos
export function updateToDosFromLocalStorage(){
    if(JSON.parse(localStorage.getItem('listOfTodos'))){
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