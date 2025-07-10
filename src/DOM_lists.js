import { allToDos, ToDo, createNewToDo, lists, List } from "./ToDos";
import { updateStorage } from "./storage";

export function addListsToSideBar(){
    sideBarLists.innerHTML = ""
    for(const listEl of lists){
        if(listEl.id != "1" && listEl.id != "2"){
            const listElement = document.createElement('div');
            listElement.classList.add("sideBar-el")
            listElement.classList.add("listElement")
            listElement.setAttribute("data-listElementId", `${listEl.id}`)
            listElement.innerHTML = listEl.name;
            sideBarLists.append(listElement)
        }
    }
}
export function createNewList() {
    let listName = document.getElementById("listName").value;  
    if(listName != ""){
        let newListInstance = new List(listName);
        newListInstance.addToArrayOfLists()
        updateStorage()
    } else {
        alert("please provide list name")
    }
}
export function generateContentPage(elId) {
    const content = document.getElementById('content')
    const listElement = document.querySelector(`[data-listElementId="${elId}"]`)
    content.innerHTML = "";
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('contentHeader')
    headerDiv.setAttribute('data-listid', elId)
    const headerBlock = document.createElement('div')
    headerBlock.classList.add('headerBlock')
    const headerText = document.createElement('h1')
    // a set of todos on content page
    const contentBody = document.createElement('div')
    contentBody.classList.add('contentBody')
    
    for(const list of lists){
        if(list.id === listElement.dataset.listelementid){
            headerText.innerHTML = list.name.toUpperCase()
            for(const toDoItem of allToDos){
            if(toDoItem.list.toLowerCase() === list.name.toLowerCase()){
                let toDoElement = document.createElement('div')
                let toDoTitle = document.createElement('div')
                let checkBox = document.createElement("INPUT")
                let toDoDeleteButton = document.createElement('button')
                toDoDeleteButton.setAttribute('data-tododeleteid', toDoItem.id)
                toDoDeleteButton.classList.add('toDoDeleteButton')
                toDoDeleteButton.innerHTML = ('Delete')
                toDoElement.setAttribute('data-todoelement', toDoItem.id)
                checkBox.setAttribute("type", "checkbox")
                checkBox.classList.add("toDoCheckbox")
                checkBox.setAttribute('data-checkBoxId', toDoItem.id)
                if(toDoItem.done === "true"){
                    checkBox.checked = true;
                }
                toDoElement.classList.add('toDoElement')

                toDoTitle.innerHTML = toDoItem.title;
                contentBody.append(toDoElement)
                if(list.id != 2){
                    toDoElement.append(checkBox, toDoTitle, toDoDeleteButton)
                } else {
                    toDoElement.append(checkBox, toDoTitle)
                }
            }
        }
        }
        
    }
    
    content.append(headerDiv, contentBody)
    headerDiv.append(headerBlock)
    headerBlock.append(headerText)
}

