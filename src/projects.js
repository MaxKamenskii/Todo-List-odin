export const lists = []

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
    console.log(listName)
    let newListInstance = new List(listName);
    lists.push(newListInstance)
    console.log(lists)
    const listElement = document.createElement('div');
    listElement.classList.add("sideBar-el")
    listElement.setAttribute("id", `${newListInstance.id}`)
    listElement.innerHTML = newListInstance.name;
    sideBar.append(listElement)
}