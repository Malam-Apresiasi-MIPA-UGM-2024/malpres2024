const { google } = require("googleapis")

// environment variables from gsheet API token
const client_email = process.env.CLIENT_EMAIL
const private_key = process.env.PRIVATE_KEY?.replace(/\\n/g, "\n")

const client = new google.auth.JWT(client_email, null, private_key, [
  "https://www.googleapis.com/auth/spreadsheets",
])

client
  .authorize()
  .then(() => {
    console.log("Connected!")
  })
  .catch((err) => {
    console.log("Google sheet API authorization error : " + err)
  })

export { client }
