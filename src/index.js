import "./styles.css";
import {allToDos} from './createToDo.js'
import {ToDo} from './createToDo.js'
import {List} from './projects.js'

console.log(JSON.parse(JSON.stringify(allToDos)));
console.log([...allToDos])

const homeList = new List("Home")
const studyList = new List("study")
const firstToDo = new ToDo("testToDo", "todo for testing", "June 18", "high")
const secondToDo = new ToDo("secondToDo", "todo for testing 2", "June 18", "low")
const thirdToDo = new ToDo("thirdToDo", "todo for testing 3", "June 18", "medium")
firstToDo.addToAllToDos()
secondToDo.addToAllToDos()
thirdToDo.addToAllToDos()
firstToDo.addToTheList(homeList)
secondToDo.addToTheList(homeList)

console.log(allToDos)