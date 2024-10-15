const { google } = require("googleapis")

// environment variables
const spreadsheetsID = process.env.spreadsheetsID

// return data from specified cells
async function read(cells, client) {
  const sheets = google.sheets({ version: "v4", auth: client })
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: spreadsheetsID,
    range: cells,
  })
  return response.data.values
}

// write data to specified cells (bisa overwrite)
async function write(cells, values, client) {
  const sheets = google.sheets({ version: "v4", auth: client })
  const resource = { values }
  const response = await sheets.spreadsheets.values.update({
    spreadsheetId: spreadsheetsID,
    range: cells,
    valueInputOption: "USER_ENTERED",
    resource,
  })
  return response.data
}

// append data to specified cells (nambahin data di bawahnya -> ga overwrite)
async function append(cells, values, client) {
  const sheets = google.sheets({ version: "v4", auth: client })
  const resource = { values }
  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: spreadsheetsID,
    range: cells,
    valueInputOption: "USER_ENTERED",
    resource,
  })
  return response.data
}

// clear data from specified cells
async function clear(cells, client) {
  const sheets = google.sheets({ version: "v4", auth: client })
  const response = await sheets.spreadsheets.values.clear({
    spreadsheetId: spreadsheetsID,
    range: cells,
  })
  return response.data
}

async function properties(client) {
  const sheets = google.sheets({ version: "v4", auth: client })
  const response = await sheets.spreadsheets.get({
    spreadsheetId: spreadsheetsID
  })
  return response.data.sheets
}

export { read, write, append, clear, properties }
