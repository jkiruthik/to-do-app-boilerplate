var data = document.getElementById("input")
var addbutton = document.getElementById("button")
var ToDoList = document.getElementById("todolist")
var list = []
addbutton.addEventListener('click' , addData)
function addData(){
       list.push(data.value)
    console.log(list)
    data.value = ""
    finalList()
}
function finalList(){
    ToDoList.innerHTML = " "
    list.forEach(function(item,index){
    ToDoList.innerHTML += `<li>${item}<a onclick="editData(${index})">Edit</a><a onclick="deleteData(${index})"> X |</a></li>`
})
}
function deleteData(index){
    list.splice(index,1)
    finalList()
}
function editData(index){
    var editedData = prompt("Enter new activity")
    list.splice(index,1,editedData)
    finalList()

}
