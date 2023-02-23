var userName = document.querySelector("#user-name")
var nameChange = document.querySelector("#name-change")
var nameEditor = document.querySelector("#name-editor")

function nameEdit() {
    nameChange.style.display = "flex";
}

function changeName() {
    userName.innerText = nameEditor.value;
    nameChange.style.display = "none";
    nameEditor.value = null
    return userName;
}

var friendCount = document.querySelector("#friend-count")
var requestCount = document.querySelector("#request-count")
var ToddS = document.querySelector("#ToddS")
var PhilS = document.querySelector("#PhilS")

function acceptTodd () {
    friendCount.innerText ++;
    requestCount.innerText --;
    ToddS.remove();
}

function acceptPhil () {
    friendCount.innerText ++ ;
    requestCount.innerText --;
    PhilS.remove();
}

function rejectTodd () {
    requestCount.innerText --;
    ToddS.remove();
}

function rejectPhil () {
    requestCount.innerText --;
    PhilS.remove();
}