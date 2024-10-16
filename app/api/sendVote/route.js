// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from 'next/server'
import { append, write } from ".././controller/gsheet"
import { checkDuplicates } from ".././controller/checkDuplicates"
import { sheetExists } from ".././controller/sheetExists"
import { client } from ".././controller/gsheetAuthorize"

export async function POST(req, res) {
    req = await req.json()
  // cek apakah request body sesuai dengan yang diinginkan
  if (!isData(req)) {
    return NextResponse.json({
      result: "failed",
      status: 400,
      error: "Bad Request, please check your request body",
    }, {status: 400})
  }

  // cek apakah nominasi ada, serta email and nim sudah terdaftar atau belum

  let  { nominasi } = req
  nominasi = nominasi + "Votes"
  let nominasiExists = await sheetExists(nominasi, client)

  if (!nominasiExists) {
    return NextResponse.json({
      result: "failed",
      status: 400,
      error: "Nomination does not exist",
    }, {status: 400})
  }

  let checkNIM = await checkDuplicates(req.NIM, nominasi + "!C:C", client)
  let checkEmail = await checkDuplicates(req.email, nominasi + "!B:B", client)

  if (checkEmail.duplicated) {
    return NextResponse.json({
      result: "failed",
      status: 400,
      error: "Email already registered",
    }, {status: 400})
  } else if (checkNIM.duplicated) {
    return NextResponse.json({
      result: "failed",
      status: 400,
      error: "NIM already registered",
    }, {status: 400})
  }
  // jika belum, maka tambahkan data ke sheets
  else {
    try {
        //append request ke spreadsheet
        let { namaLengkap, email, NIM, departemen, jurusan, pilihan } = req;
        let values = [[namaLengkap, email, NIM, departemen, jurusan, pilihan]];
        append(nominasi + "!A2", values, client)
        return NextResponse.json({ result: "success", status: 200 })
    } catch (err) {
        return NextResponse.json({ result: "failed", status: 400, error: err}, {status: 400})
    }
  }
}

// function untuk cek apakah request body sesuai dengan yang diinginkan
function isData(data) {
  return (
    data["nominasi"] !== undefined && 
    data["namaLengkap"] !== undefined && 
    data["email"] !== undefined &&
    data["NIM"] !== undefined &&
    data["departemen"] !== undefined &&
    data["jurusan"] !== undefined &&
    data["pilihan"] !== undefined
  )
}