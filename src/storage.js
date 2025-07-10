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
const listOfLists = []

function generateDefaultLists(){
    const inbox = { name: "inbox", id: "1" }
    const trash = { name: "trash", id: "2" }
    const home = { name: "Home", id: "3" }
    const study = { name: "Study", id: "4" }

    listOfLists.push(inbox, trash, home, study)
}
function generateDefaultToDos(){
    const firstToDo = { title: "Do Laundry", description: "Wash darks and whites separately. Don’t forget to fold and put away.", list: "", priority: "high", dueDate: "2025-07-22" }
    const secondToDo = { title: "Clean the desk", description: "take out all the trash from desk like papers, docs, coffe cup", list: "inbox", priority: "low", dueDate: "2025-07-22" }
    const thirdTodo = { title: "Water the plants", description: "Focus on the ones by the window—soil's looking dry.", list: "inbox", priority: "medium", dueDate: "2025-07-22" }
    const forthToDo = { title: "Finish CS50 Week 5 Lecture", description: "take notes in Notion", list: "study", priority: "medium", dueDate: "2025-07-22" }
    const fifthToDo = { title: "Buy grocceries", description: "buy milk, chicken, cucumbers, bread, oil, butter, ice cream", list: "inbox", priority: "high", dueDate: "2025-07-22" }
    const sixthToDo = { title: "Do flashcards", description: "go through the list of 50 words", list: "study", priority: "low", dueDate: "2025-07-22" }
    const seventhToDo = { title: "Debug the To Do list app", description: "oh there is so much to debug", list: "inbox", priority: "low", dueDate: "2025-07-22" }
    const eightToDo = { title: "Clean the kitchen", description: "Wipe down counters, wash dishes, and take out the trash.", list: "Home", priority: "low", dueDate: "2025-07-22" }
    const ninthToDo = { title: "Meal prep for 3 days", description: "Cook and portion chicken with rice", list: "Home", priority: "low", dueDate: "2025-07-25" }
    const tenthToDo = { title: "Order water", description: "We need 4 huge water bottles to prepare for the trip", list: "", priority: "high", dueDate: "2025-07-25" }
    const eleventsToDo = { title: "Finish JavaScript exercises", description: "Complete the functions and objects section from the tutorial", list: "", priority: "low", dueDate: "2025-07-22" }
    const twelvethToDo = { title: "Practice algorithm problems", description: "Solve 10 medium leetcode problems", list: "", priority: "medium", dueDate: "2025-07-26"}
    const thirteenthToDo = { title: "Declutter wardrobe", description: "Sort out clothes I don’t wear and prepare a donation bag.", list: "Home", priority: "low", dueDate: "2025-08-26"}
    const fourteenthToDo = { title: "Fix broken drawer handle", description: "Tighten screws or replace if needed", list: "Home", priority: "high", dueDate: "2025-07-29"}
    const fifteenthToDo = { title: "Write a summary of OOP concepts", description: "Include constructor functions, prototypes, and classes.", list: "Study", priority: "high", dueDate: "2025-07-26"}
    // const ToDo = { title: "", description: "", list: "", priority: "high", dueDate: "2025-07-26"}
    
    listOfTodos.push(firstToDo, secondToDo, thirdTodo, forthToDo, fifthToDo, sixthToDo, seventhToDo, eightToDo, ninthToDo, tenthToDo, eleventsToDo, twelvethToDo, thirteenthToDo, fourteenthToDo, fifteenthToDo)
}
// check if there is a list of todos in the local storage
//if there is none, then generate and update the list of todos from the list in the storage
function updateAllToDosListFromLocalStorage(){
        const allToDosJSON = JSON.parse(localStorage.getItem('listOfTodos'))
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
    }
export function updateToDosFromLocalStorage(){
    if(!JSON.parse(localStorage.getItem('listOfTodos'))){
        generateDefaultToDos()
        localStorage.setItem('listOfTodos', JSON.stringify(listOfTodos))
        updateAllToDosListFromLocalStorage()
    } else
    if(JSON.parse(localStorage.getItem('listOfTodos'))){
        updateAllToDosListFromLocalStorage()
    }
}

function updateListsFromTheLocalStorage(){
    const listsJSON = JSON.parse(localStorage.getItem('listOfLists'))
    for(let i = 0; i < listsJSON.length; i++){
        const name = listsJSON[i].name;
        const id = listsJSON[i].id;
        let listFromStorage = new List (name, id)
        listFromStorage.addToArrayOfLists();
        if(listFromStorage.name == "inbox"){
            listFromStorage.id = "1";
        }
        if(listFromStorage.name == "trash"){
            listFromStorage.id = "2";
        }
    }
}
export function updateListsFromLocalStorage(){
    if(!JSON.parse(localStorage.getItem('listOfLists'))){
        generateDefaultLists()
        localStorage.setItem('listOfLists', JSON.stringify(listOfLists))
        updateListsFromTheLocalStorage()
    } else if(JSON.parse(localStorage.getItem('listOfLists'))){
        updateListsFromTheLocalStorage()
    }
}

// Function for updating the storage any time user does some action in the app
export function updateStorage() {
    
    const allToDosJSON = JSON.stringify(allToDos)
    localStorage.setItem('listOfTodos', allToDosJSON)
    const listsJSON = JSON.stringify(lists)
    localStorage.setItem('listOfLists', listsJSON)
    console.log("storage updated")
    console.log(allToDos)
    console.log(allToDosJSON)
}