let artistSearchBtn = document.querySelector(".artistSearchBtn")
let toggleOne = document.getElementById("toggle1")
let menuOne = document.querySelector(".menu1")
// menuOne.classlist.add()

// function messWithToggle () {
//   toggleOne.checked
// }


function play() {
    let audio = document.getElementById("audio");
    audio.play();
  }

artistSearchBtn.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("Hello")
})

window.addEventListener("scroll", () => {
  if (toggleOne.checked) {
    toggleOne.checked = false
  }
})