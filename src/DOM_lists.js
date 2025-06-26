import { allToDos, ToDo, createNewToDo, lists, List } from "./ToDos";


export function addNewListToSideBar() {
    let listName = document.getElementById("listName").value;  
    if(listName != ""){
        console.log(listName)
        let newListInstance = new List(listName);
        newListInstance.addToArrayOfLists()
        console.log(`lists array ${lists}`)
        const listElement = document.createElement('div');
        listElement.classList.add("sideBar-el")
        listElement.classList.add("listElement")
        listElement.setAttribute("data-listElementId", `${newListInstance.id}`)
        listElement.innerHTML = newListInstance.name;
        sideBar.append(listElement)
    } else {
        alert("please provide list name")
    }
}
export function generateContentPage(elId) {
    const content = document.getElementById('content')
    const listElement = document.querySelector(`[data-listElementId="${elId}"]`)
    console.log(`element clicked: ${listElement}`)
    console.log(listElement)
    content.innerHTML = "";
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('contentHeader')
    const headerBlock = document.createElement('div')
    headerBlock.classList.add('headerBlock')
    const headerText = document.createElement('h1')
    // a set of todos on content page
    const contentBody = document.createElement('div')
    contentBody.classList.add('contentBody')
    
    for(const list of lists){
        if(list.id === listElement.dataset.listelementid){
            headerText.innerHTML = list.name.toUpperCase()
        }
        for(const toDoItem of allToDos){
            if(toDoItem.list === list.name){
                let toDoElement = document.createElement('div')
                let toDoTitle = document.createElement('div')
                let checkBox = document.createElement("INPUT")
                toDoElement.setAttribute('data-todoelement', toDoItem.id)
                checkBox.setAttribute("type", "checkbox")
                checkBox.classList.add("toDoCheckbox")
                checkBox.setAttribute('data-checkBoxId', toDoItem.id)
                toDoElement.classList.add('toDoElement')

                toDoTitle.innerHTML = toDoItem.title;
                contentBody.append(toDoElement)
                toDoElement.append(checkBox, toDoTitle)
                console.log(toDoItem.title)
            }
        }
    }
    
    content.append(headerDiv, contentBody)
    headerDiv.append(headerBlock)
    headerBlock.append(headerText)
}

