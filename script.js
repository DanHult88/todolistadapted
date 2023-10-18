let listContainer = document.getElementById("myUL");

showTask();

listContainer.addEventListener('click', function(ev) {
  if (ev.target.classList.contains('remove-btn')) {
    let li = ev.target.parentElement;
    listContainer.removeChild(li);
    saveData();
  } else if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    saveData();
  }
}, false);

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("Can't add blank!");
  } else {
    let removeButton = document.createElement("button");
    removeButton.className = "remove-btn";
    removeButton.textContent = "Remove";
    li.appendChild(removeButton);

    listContainer.appendChild(li);
  }
  document.getElementById("myInput").value = "";

  saveData();
}


function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  let savedData = localStorage.getItem("data");
  if (savedData) {
    listContainer.innerHTML = savedData;
  }
}