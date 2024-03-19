let input = document.querySelector("input");
let inputForm = document.querySelector("form");
let btnFirst = document.querySelector(".first-delete");
let btnEnd = document.querySelector(".end-delete");
let btnAll = document.querySelector(".delete-all");
let list = document.querySelector("ol");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${input.value}</li>`;
  input.value = "";
  new Audio("./audio/mouse-click-153941 (1).mp3").play();
});
btnFirst.addEventListener("click", () => {
  Array.from(list.children).at().remove();
  new Audio("./audio/mouse-click-153941 (1).mp3").play();
});
btnEnd.addEventListener("click", () => {
  Array.from(list.children).at(-1).remove();
  new Audio("./audio/mouse-click-153941 (1).mp3").play();
});
btnAll.addEventListener("click", () => {
  let arr = Array.from(list.children);
  arr.forEach((item) => {
    item.remove();
  });
  new Audio("./audio/click-button-140881.mp3").play();
});
