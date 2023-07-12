let artistSearchBtn = document.querySelector(".artistSearchBtn")
let toggleOne = document.getElementById("toggle1")

async function getAudioFilesS3 () {
  let audioFiles = await fetch ('http://localhost:3000/audioFiles')
  let audioFilesJSON = await audioFiles.json()
  console.log("🚀 ~ file: index.js:7 ~ getAudioFilesS3 ~ audioFilesJSON:", audioFilesJSON)

  audioFilesJSON.forEach(val => {
    console.log(val)
    console.log(val.split('/'))
    console.log(val.split('/').pop().split("_"))
  })
}

artistSearchBtn.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("Hello")
})

window.addEventListener("scroll", () => {
  if (toggleOne.checked) {
    window.onscroll = null
    toggleOne.checked = false
  }
})

getAudioFilesS3()