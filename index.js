let myLinks = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let pastLinks = JSON.parse(localStorage.getItem("myLinks"))
if(pastLinks != null){
    myLinks = pastLinks
    renderLinks()
}
console.log(pastLinks)


inputBtn.addEventListener("click",function(){ /*What happens on click of Input button*/
    myLinks.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLinks",JSON.stringify(myLinks))
    renderLinks()
    console.log(localStorage.getItem("myLinks"))
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
