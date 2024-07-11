const socket = io();
function uploadFile(file){
    console.log(file);
}
let form = document.getElementById("form");
let input = document.getElementById("input");
let messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  socket.emit("message", input.value);
  input.value = "";
});


socket.on("message", (message) => {
  let li = document.createElement("li");
  li.textContent = message;
  messages.appendChild(li);
});