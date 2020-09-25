// 다시입력버튼 만들기

const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const show = document.querySelector(".js-showName");


const NAME_LS = "currentUser"
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(NAME_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  showName(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function showName(text) {
  form.classList.remove(SHOWING_CN);
  show.classList.add(SHOWING_CN);
  show.innerText = `반갑습니다 ${text}님 !`;
}
function loadName() {
  const currentUser = localStorage.getItem(NAME_LS);
  if (currentUser === null) {
    askForName();
  } else {
    showName(currentUser);
  }
}


loadName();