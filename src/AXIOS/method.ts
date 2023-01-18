import React, { useState, useEffect } from "react"

const useHandleMethod = () => {
  const [method, setMethod] = useState(String)

  const changeMethod = (e: any) => {
    setMethod(e.target.value)
  }

  return { method, changeMethod, setMethod }
}

export default useHandleMethod
