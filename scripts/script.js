document.getElementById('addButton').onclick = AddItem

// let listItems = document.querySelectorAll('li')
// for (let i = 0; i < listItems.length; i++) 
// {
//     let button = document.createElement('button')
//     button.className = 'close'
//     button.innerText = 'x'
//     listItems[i].appendChild(button)
// }

// let closeButtonss = document.querySelectorAll('.close')
// for (let i = 0; i < closeButtonss.length; i++) 
// {
//     closeButtonss[i].onClick = function()
//     {
//         let item = this.parentElement
//         item.style.display = 'none'
//     }
// }

let list = document.querySelector('#list')
list.addEventListener('click', function(ev)
{
    if (ev.target.tagName === 'LI')
    {
        ev.target.classList.toggle('checked')
    }
}) 

function AddItem()
{
    let inputValue = document.querySelector("#inputText").value;
    document.querySelector("#inputText").value = ''
    if (inputValue == '' || inputValue == ' ')
    {
        alert('You must input something')
    }
    else
    {
        let listItem = document.createElement('li')
        let list = document.querySelector('#list')
        let button = document.createElement('button')
        let textNodeForListItem = document.createTextNode(inputValue)
        button.className = 'close'
        let textNodeForButton = document.createTextNode('x')
        button.appendChild(textNodeForButton)
        button.onclick = function()
        {
            let parentElement = this.parentElement
            parentElement.style.display = 'none'
        }
        listItem.appendChild(textNodeForListItem)
        listItem.appendChild(button)
        list.appendChild(listItem)
    }
}