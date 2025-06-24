import { ToDo, allToDos } from "./createToDo";

export function toggleToDo(elId) {
    var theToDoElement;
    for(const instance of allToDos){
        if(instance.id === elId){
            theToDoElement = instance;
        }
    }
    theToDoElement.toggleDoneStatus()
}