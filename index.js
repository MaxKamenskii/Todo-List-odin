import {allToDos} from './createToDo.js'
import {ToDo, addToAllToDos, deleteToDo, addToTheList, setPriority} from './createToDo.js'
import {List} from './projects.js'
addToAllToDos("finish project", "finish the todo list", "June 23rd", "high")
addToAllToDos("ebay", "sell the monitor", "June 17", "low")

console.log("After adding:", [...allToDos]);

// deleteToDo("finish project")

console.log("After deleting:", [...allToDos]);

const homeList = new List("Home")
const studyList = new List("study")

addToTheList("ebay", homeList)
addToTheList("finish project", homeList)


console.log(homeList.ToDos)
console.log(studyList.ToDos)
console.log("homeList todos",homeList.ToDos)



console.log(allToDos[1])