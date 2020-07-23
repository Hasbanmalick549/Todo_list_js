var list =document.getElementById('list')
function addTodo() {
 var todo_item = document.getElementById('todo-item')
 var li =document.createElement("li")
 var liText=document.createTextNode(todo_item.value)
 li.setAttribute('class','listli')
 li.appendChild(liText)
 
 //delete button
 var dlbtn =document.createElement("button")
 var dltext=document.createTextNode("delete")
 dlbtn.setAttribute("class","btn dlbtn")
 dlbtn.setAttribute("onclick","deleteItem(this)")
 dlbtn.appendChild(dltext)
 li.appendChild(dlbtn)
 //edit button
var editbtn= document.createElement("button")
var editText=document.createTextNode("Edit")
editbtn.appendChild(editText)
editbtn.setAttribute("class","editbtn")
editbtn.setAttribute("onclick","editItem(this)")
li.appendChild(editbtn)


var d =new Date()

var h = d.getHours()
var m =d.getMinutes()
var s =d.getSeconds()
if(h>12){
  h= h-12
  
}
var times =` Time;  ${h} : ${m} : ${s}`


var timebtn =document.createElement("button")

timebtn.append(times)
timebtn.setAttribute("class","timebtn")
li.append(timebtn)

 

 
 
 document.getElementById('list').appendChild(li)
 todo_item.value=""
}
function deleteItem(e){
  e.parentNode.remove()
}
function deleteAll() {
  document.getElementById("list").innerHTML=""
}
function editItem(e) {
  var editValue=prompt("edit Value",e.parentNode.firstChild.nodeValue)
  e.parentNode.firstChild.nodeValue=editValue
  
}


