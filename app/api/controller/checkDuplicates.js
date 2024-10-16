import { read } from "./gsheet"

// check duplicate value in sheets row/column
// count row length
// return {duplicated <boolean>}
async function checkDuplicates(value, cells, client) {
  let data = await read(cells, client)
  if (data === undefined) return { duplicated: false }
  let duplicated = false
  data.forEach(element => {
    if (element[0] === value) {
      duplicated = true
    }
  })
  return { duplicated }
}

export { checkDuplicates }
