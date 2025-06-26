import { ToDo, allToDos } from "./ToDos";

export function toggleToDo(elId) {
    var theToDoElement;
    for(const instance of allToDos){
        if(instance.id === elId){
            theToDoElement = instance;
        }
    }
    theToDoElement.toggleDoneStatus()
}