// alert('connected')

//create text node

// var h = document.createElement('h1')
// var myText = document.createTextNode('hello world!')

// //till here we have created <h1></h1> and hello world! seperately but we need to put these together

// h.appendChild(myText)
// //now these are together now we need to paste it

// document.querySelector('h1').appendChild(h)

//while loop

// let val = 5

// while (val>0) {
//     console.log(val);
//     val--;
// }

//REMOVE DONE TODOS

var ul = document.getElementById("list");
var input = document.getElementById("input");

var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);
input.addEventListener("keypress", addItemKeypress);

function addItem() {
  var item = input.value;
  var textNode = document.createTextNode(item);

  if (item == "") {
    return false;
  } else {
    var li = document.createElement("li");
    li.setAttribute("class", "myCheck");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("id", "check");

    var label = document.createElement("label");
    label.setAttribute("for", "item");

    li.appendChild(checkbox);
    label.appendChild(textNode);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);
    setTimeout(() => {
      li.className = "visual";
    }, 2);
    input.value = "";
  }
}
function addItemKeypress(event) {
  var item = input.value;
  var textNode = document.createTextNode(item);

  if (item != "" && event.keyCode == 13) {
    var li = document.createElement("li");
    li.setAttribute("class", "myCheck");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("id", "check");

    var label = document.createElement("label");
    label.setAttribute("for", "item");

    li.appendChild(checkbox);
    label.appendChild(textNode);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);
    setTimeout(() => {
      li.className = "visual";
    }, 2);
    input.value = "";
  } 
}

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);

function removeItem() {
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    //   console.log(li[index].children[0].checked);
    while (li[index].children[0].checked) {
      ul.removeChild(li[index]);
    }

    //OR

    // if (li[index].children[0].checked==true) {
    //   ul.removeChild(li[index]);
    // } else {
    //   continue;
    // }
  }
}

var removeAllButton = document.getElementById("removeAll");
removeAllButton.addEventListener("click", removeAllItem);

li = ul.children;
console.log(li.length);
function removeAllItem() {
  li = ul.children;
  while (li.length > 0) {
    ul.removeChild(li[li.length - 1]);
    li.length--;
  }
}
