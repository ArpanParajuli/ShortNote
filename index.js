var inputTitle = document.getElementById("inputTitle");
var inputDetails = document.getElementById("inputDetails");
var appendDiv = document.getElementById("list-div");

var taskno = 1;

function addList() {
  if (inputTitle.value != "" && inputDetails.value != "") {
    const currentTime = new Date();
    const years = currentTime.getFullYear();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    let h2 = document.createElement("h3");
    let displayTime = document.createElement("span");
    let p = document.createElement("p");
    let createDiv = document.createElement("div");

    h2.style.listStyleType = "none";
    h2.style.color = "rgb(227, 227, 0)";
    h2.innerHTML = inputTitle.value;

    displayTime.style.fontSize = "10px";
    displayTime.style.color = "rgb(227, 227, 0)";
    displayTime.innerHTML = `Date: ${years}-${hours}-${minutes}-${seconds}`;

    p.style.fontSize = "10px";
    p.style.listStyleType = "none";
    p.style.color = "rgb(227, 227, 0)";
    p.innerHTML = inputDetails.value;

    createDiv.style.backgroundColor = "rgb(24, 24, 38)";
    createDiv.style.height = "auto";
    createDiv.style.width = "auto";
    createDiv.style.maxWidth = "60%";

    createDiv.style.marginTop = "30px";
    createDiv.style.borderRadius = "5px";

    createDiv.appendChild(displayTime);
    createDiv.appendChild(h2);
    createDiv.appendChild(p);

    appendDiv.appendChild(createDiv);

    taskno++;
  }
}

function resetList() {
  taskno = 1;
  appendDiv.innerHTML = "";
  inputTitle.value = "";
  inputDetails.value = "";
}
