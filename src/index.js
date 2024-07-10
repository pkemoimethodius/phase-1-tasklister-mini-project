document.addEventListener("DOMContentLoaded", () => {
 document.getElementById("create-task-form").addEventListener("submit",(e) =>{
e.preventDefault()
handleList(e.target.tasks.value)

 })
})
function handleList(item){
let li=document.createElement ("li")
li.textContent=`${item}`
document.getElementById("tasks").appendChild("li")
console.log(li)
}