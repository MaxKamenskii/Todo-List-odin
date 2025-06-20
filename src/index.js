import "./styles.css";
import {allToDos} from './createToDo.js'
import {ToDo} from './createToDo.js'
import {List} from './projects.js'
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