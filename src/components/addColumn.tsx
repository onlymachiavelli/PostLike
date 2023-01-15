import React, { useState, useEffect } from "react"

import DataColumn from "./data.column"
const Fields = () => {
  const [fields, setFields]: any = useState([])
  const DeleteField = (id: Number) => {
    //
    const newFields = fields.filter((field: any, index: any) => {
      return index !== id
    })

    setFields(newFields)
  }

  const addField = () => {
    setFields([
      ...fields,
      <DataColumn onDel={() => DeleteField(fields.length++)} />,
    ])
  }

  const Clear = () =>{
    setFields([])
  }
 
  return { fields, addField ,Clear }
}
export default Fields
