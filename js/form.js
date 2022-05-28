let getInput = document.querySelector("input");
function handleInput(event){
  event.preventDefault();
  console.log(getInput.value);
  let box = document.createElement('li');
  let text = document.createTextNode(getInput.value);
  box.appendChild(text);
  document.querySelector(".result ul").appendChild(box);
  getInput.value = "";
}
document.querySelector("form").addEventListener("submit", handleInput);