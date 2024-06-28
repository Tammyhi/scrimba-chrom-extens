let myLinks = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const pastLinks = JSON.parse(localStorage.getItem("myLinks"))
if(pastLinks){
    myLinks = pastLinks
    render(myLinks)
}
console.log(pastLinks)


inputBtn.addEventListener("click",function(){ /*What happens on click of Input button*/
    myLinks.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLinks",JSON.stringify(myLinks))
    render(myLinks)
    console.log(localStorage.getItem("myLinks"))
})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLinks = []
    render(myLinks)
})

function render(links){
    let listItems = ""
    for(let i = 0; i < links.length; i++){
        listItems += `
            <li>
                <a target='_blank' href='${links[i]}'>
                    ${links[i]}
                </a>
        `
    }
    ulEl.innerHTML = listItems
}
