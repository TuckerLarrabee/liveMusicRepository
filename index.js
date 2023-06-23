let artistSearchBtn = document.querySelector(".artistSearchBtn")
console.log("🚀 ~ file: index.js:2 ~ artistSearchBtn:", artistSearchBtn)

function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }

artistSearchBtn.addEventListener("click", (e) => {
  e.preventDefault()

  console.log("Hello")
})