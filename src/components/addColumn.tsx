import React, { useState, useEffect } from "react"

import DataColumn from "./data.column"
const Fields = () => {
  const [fields, setFields]: any = useState([])
  const addField = () => {
    setFields([...fields, <DataColumn />])
  }

  return { fields, addField }
}
export default Fields
