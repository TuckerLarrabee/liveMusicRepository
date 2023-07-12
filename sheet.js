const sheetID = '1rxeMzZZSR52KtG7Tm7v1e6sWoF4c_yo9PxUXGMfN0us'
const baseURL = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`
const sheetName = 'Sheet1'
const qu = "Select E"
const query = encodeURIComponent(qu)
const url = `${baseURL}&sheet=${sheetName}&tq=${query}`
const data = []



module.exports = async function callGoogleSheets() {
    try {
        const fetch = await import("node-fetch")
        const sheetData = await fetch.default(url)

        if (!sheetData.ok) {
            throw new Error(`HTTP error! Status: ${sheetData.status}`);
        }

        let sheetDataText = await sheetData.text()
        return sheetDataText

    } catch (error) {
        console.error('Error fetching Google Sheets data:', error);
    }
    // console.log("in callGoogleSheets")
    // let sheetData = await fetch(url);
}