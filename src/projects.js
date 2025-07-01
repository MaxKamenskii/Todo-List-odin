/* export const lists = []

export class List{
    constructor(name) {
        this.name = name;
        this.id = crypto.randomUUID()
        this.ToDos = []
    }
}

const sideBar = document.getElementById('sideBar')

export function createList() {
    let listName = document.getElementById("listName").value;
    if(listName != ""){
        console.log(listName)
        let newListInstance = new List(listName);
        lists.push(newListInstance)
        console.log(lists)
        const listElement = document.createElement('div');
        listElement.classList.add("sideBar-el")
        listElement.classList.add("listElement")
        listElement.setAttribute("id", `${newListInstance.id}`)
        listElement.innerHTML = newListInstance.name;
        sideBar.append(listElement)
    } else {
        alert("please provide list name")
    }
}

export function generateListPage(listId) {
    var theListElement;
            for(const instance of lists){
                if(instance.id === listId){
                    theListElement = instance;
                }
            }
    const content = document.getElementById("content")
    content.innerHTML = "";
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('contentHeader')
    const headerBlock = document.createElement('div')
    headerBlock.classList.add("headerBlock")
    const headerText = document.createElement('h1')
    headerText.innerHTML = theListElement.name;
    content.append(headerDiv)
    headerDiv.append(headerBlock)
    headerBlock.append(headerText)
}
*/