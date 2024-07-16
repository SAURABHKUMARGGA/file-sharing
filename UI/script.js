const socket = io();
let form = document.getElementById("form");
let input = document.getElementById("input");
let messages = document.getElementById("messages");


function uploadFile(e){
  console.log(e);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      // console.log(e.target.result);
      socket.emit("image", e.target.result);
      // let imgelement = document.createElement("img");
      // imgelement.style.margin = "20px";
      // imgelement.style.width = "200px";
      // imgelement.style.height = "200px";
      // imgelement.src = e.target.result;
      // messages.appendChild(imgelement);
    }
}
socket.on("image",(image)=>{
  // console.log(image);
  let imgelement = document.createElement("img");
  imgelement.style.margin = "20px";
  imgelement.style.width = "200px";
  imgelement.style.height = "200px";
  imgelement.src = image;
  messages.appendChild(imgelement);
})

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