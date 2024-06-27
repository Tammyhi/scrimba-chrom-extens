let myLinks = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click",function(){ /*What happens on click of Input button*/
    myLinks.push(inputEl.value)
    renderLinks()
    inputEl.value = ""
})

function renderLinks(){
    let listItems = ""
    for(let i = 0; i < myLinks.length; i++){
        listItems += `
            <li>
                <a target='_blank' href='${myLinks[i]}'>
                    ${myLinks[i]}
                </a>
        `
    }
    ulEl.innerHTML = listItems
}
