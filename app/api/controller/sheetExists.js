import { properties } from "./gsheet"

//as we specify the sheet name in the input, we need to verify that it exists
//get the property of the whole spreadsheet, for each sheet check its title
async function sheetExists(sheetname, client) {
    let data = await properties(client)
    let exists = false; 
    data.forEach(sheet => {
        if(sheet.properties.title == sheetname) {
            exists = true;
        }
    })
    return exists
}   

export { sheetExists }