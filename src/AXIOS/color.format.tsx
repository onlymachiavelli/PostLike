import React, { useState, useEffect } from "react"

const Format = () => {
  const [clr, setColor]: any = useState("")
  let color: any = ""
  const colorFormat = (myString: any) => {
    for (let i = 0; i < myString.length; i++) {
      let begin = true
      if (
        myString[i] === "{" ||
        myString[i] === "[" ||
        myString[i] === "}" ||
        myString[i] === "]"
      ) {
        //setColor([...clr, <p className="text-pink">{myString[i]}</p>])
        color += `<p className="text-pink">${myString[i]}</p>`
      } else if (myString[i] === ",") {
        //setColor([...clr, <p className="text-white">{myString[i]}</p>])
        color += `<b className="text-pink">${myString[i]}</b><br/>`
      } else if (myString[i] == `"` || myString[i] == `'`) {
        let str: any = myString[i]
        for (let j = i + 1; j < myString.length; j++) {
          if (myString[j] == `"` || myString[j] == `'`) {
            if (myString[j - 1] == ":") begin = false

            str += myString[j]
            //setColor([...clr, <p className="text-brown">{str}</p>])
            color += `<b className="text-${() =>
              begin ? "grn" : "brown"}">${str}</b>`

            i = j
            break
          } else {
            str += myString[j]
          }
        }
      } else if (myString[i] === ":") {
        let st = "<b className='text-white'>:</b>"
        for (let j = i + 1; j < myString.length; j++) {
          if (myString[j] === ",") {
            st += myString[j]
            //setColor([...clr, <p className="text-brown">{str}</p>])
            color += `<b className="text-red">${st}</b> <br/>`

            i = j
            break
          } else {
            st += myString[j]
          }
        }
      } else {
        //setColor([...clr, <p className="text-white">{myString[i]}</p>])
        color += `<b className="text-white">${myString[i]}</b>`
      }
      //else if ()

      setColor(color)
    }
  }
  return { clr, setColor, colorFormat, color }
}

export default Format
