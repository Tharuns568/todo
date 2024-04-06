//getting element by id

var input = document.getElementById("one")
var listitem = document.getElementById("two")
var delete2item = document.getElementById("three")
var mainlist = document.getElementsByClassName("head-line")

//creating function for adding list

function add() {
  var list = document.createElement("li")
  list.innerHTML = input.value + " <button id='three' class='delete2-btn' onclick='deleteitem(event)'>X</button>"
  listitem.append(list)
}

//creating function for deleting list

function deleteitem(event) {
  event.target.parentElement.remove()
}




