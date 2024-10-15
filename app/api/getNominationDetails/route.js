import { NextResponse } from 'next/server'
import { read } from ".././controller/gsheet"
import { sheetExists } from ".././controller/sheetExists"
import { client } from ".././controller/gsheetAuthorize"

export async function POST(req, res) {
    req = await req.json()
    //ensure request body exists
    if(req["nominasi"] == undefined) {
        return NextResponse.json({
            result: "failed",
            status: 400,
            error: "Bad Request, please check your request body",
        }, {status: 400})
    }

    //call sheetExists
    let { nominasi } = req
    nominasi = nominasi + "Details"
    let nominasiExists = await sheetExists(nominasi, client)

    if(!nominasiExists) {
      return NextResponse.json({
        result: "failed",
        status: 400,
        error: "Nomination does not exist",
    }, {status: 400})
    } else {
      let shortDesc = await read(nominasi + "!A1", client)

      let keys = await read(nominasi + "!2:2", client)
      if(!keys) {
        return NextResponse.json({
            "shortDesc": shortDesc[0][0],  //function read returns a 2d array, we just need the value inside
            "candidates": [] //for development purposes, where a sheet may have no keys yet, therefore no candidates yet
          })
      }
      let rightMostColumn = String.fromCharCode(
        (keys[0].length > 26) ? 90 : keys[0].length + 64 //char ascii kapital paling tinggi (Z) = 90, harusnya jumlah kolom ga sampe > 26 juga
      )  //1 key -> 2 key -> B, 3 key -> C, dst

      let candidatesRaw = await read(nominasi + "!A3:" + rightMostColumn, client)
      if(!candidatesRaw) {
        return NextResponse.json({
            "shortDesc": shortDesc[0][0],  //function read returns a 2d array, we just need the value inside
            "candidates": [] //for development purposes, where a sheet may have no candidates yet
          })
      }

      let candidates = [];
      candidatesRaw.forEach(candidate => {
        let formatted = {};
        for(let i = 0; i < keys[0].length; i++) {
          formatted[keys[0][i]] = candidate[i]; //for each candidate, turns raw [attr1, attr2, ...] to {key1: attr1, key2: attr2, ...}
        }
        candidates.push(formatted)
      });

      return NextResponse.json({
        "shortDesc": shortDesc[0][0],  //function read returns a 2d array, we just need the value inside
        "candidates": candidates
      })
    }
  } 

export const config = {
    api: {
      externalResolver: true,
    },
  }