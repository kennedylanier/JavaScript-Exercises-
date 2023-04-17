// update 'Apples' item
document.getElementById("list").getElementsByTagName("li")[1].textContent = "Granny Smith Apples";

// remove 'Oat Milk' from the list
var oatMilk = document.getElementById("list").getElementsByTagName("li")[3];
oatMilk.parentNode.removeChild(oatMilk);

// add 'Kombucha' item
var newItem = document.createElement("li");
var itemText = document.createTextNode("Kombucha");
newItem.appendChild(itemText);
document.getElementById("list").appendChild(newItem);

// clear the list and add items from the array
var newList = ['protein bars', 'almonds', 'peanut butter'];
document.getElementById("list").innerHTML = '';
for (var i = 0; i < newList.length; i++) {
  var newItem = document.createElement("li");
  var itemText = document.createTextNode(newList[i]);
  newItem.appendChild(itemText);
  document.getElementById("list").appendChild(newItem);
}

// add class 'important' to the almonds item
document.getElementById("list").getElementsByTagName("li")[1].classList.add("important");
