import {allToDos} from './createToDo.js'
import {ToDo, addToTheList, deleteToDo} from './createToDo.js'
addToTheList("finish project", "finish the todo list", "June 23rd", "high")
addToTheList("ebay", "sell the monitor", "June 17", "low")

console.log("After adding:", [...allToDos]);

deleteToDo("finish project")

console.log("After deleting:", [...allToDos]);