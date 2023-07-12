//DOM elements
let artistSearchBtn = document.querySelector(".artistSearchBtn")
let toggleOne = document.getElementById("toggle1")

// Google Sheets Fetch Call
async function getGoogleSheetsData() {
    console.log("in callGoogleSheets")
    let sheetData = await fetch('http://localhost:3000/sheetData');
    let sheetDataText = await sheetData.text()

    // taking sheetDataText, removing first 49 characters, last 3 characters, 
    // and all backslashes to allow for JSON parse
    const sheetDataJsObj = sheetDataText.substr(49).slice(0, -3)
    const sheetDataJSONObj = JSON.parse(sheetDataJsObj.replace(/\\/g, ''));

    //sheetDataJSONObj.table and sheetDataJSONObj.rows have all data from query. Can loop thru
    console.log("🚀 ~ file: index.js:23 ~ getGoogleSheetsData ~ jsObjNoSlash:", sheetDataJSONObj)

    sheetDataJSONObj.table.rows.forEach(data => {
      // console.log(data.c)
      data.c.forEach(furtherData => {
        console.log(furtherData.v)
      })
    })
}


// AWS S3 Call
async function getAudioFilesS3 () {
  let audioFiles = await fetch ('http://localhost:3000/audioFiles')
  let audioFilesJSON = await audioFiles.json()
  console.log("🚀 ~ file: index.js:7 ~ getAudioFilesS3 ~ audioFilesJSON:", audioFilesJSON)
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
getGoogleSheetsData()