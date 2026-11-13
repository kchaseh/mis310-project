const qStart = document.querySelector("#qStartid")
const q1 = document.querySelector("#q1id")
const qNext = document.querySelector("#qNextid")

function showQuestion() {
    q1.showModal();
}
function hideQuestion() {
    q1.close()
}


qStart.addEventListener("click", showQuestion)
qNext.addEventListener("click", hideQuestion)

