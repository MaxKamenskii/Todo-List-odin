import { allToDos } from "./createToDo"
import inboxSVG from "../assets/inbox.svg";


export function generateInbox() {
    const inboxButton = document.getElementById('inboxButton')
    const content = document.getElementById("content")
    content.innerHTML = "";
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('contentHeader')
    const headerBlock = document.createElement('div')
    headerBlock.classList.add('headerBlock')
    const headerText = document.createElement('h1')
    headerText.innerHTML = "Inbox"
    const contentBody = document.createElement('div')
    contentBody.classList.add('contentBody')
    const inboxHeaderPic = document.createElement("img");
    inboxHeaderPic.src = inboxSVG;
    headerDiv.append(headerBlock)
    headerBlock.append(inboxHeaderPic, headerText)
    
    
    content.append(headerDiv, contentBody)

    for(const toDo of allToDos) {
        if(toDo.list === undefined){
            let toDoElement = document.createElement('div')
            let toDoTitle = document.createElement('div')
            let checkBox = document.createElement("INPUT")
            toDoElement.setAttribute('data-todoelement', toDo.id)
            checkBox.setAttribute("type", "checkbox")
            checkBox.classList.add("toDoCheckbox")
            checkBox.setAttribute('data-checkBoxId', toDo.id)
            toDoElement.classList.add('toDoElement')

            toDoTitle.innerHTML = toDo.title;
            contentBody.append(toDoElement)
            toDoElement.append(checkBox, toDoTitle)
            console.log(toDo.title)
        }
    }
}

