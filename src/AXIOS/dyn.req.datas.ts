import React, { useState, useEffect } from "react"

const useDynDatas = () => {
  const [dynDatas, setDynDatas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {}, [])
  const addDynDatas = () => {
    setDynDatas([...dynDatas])
    setLoading(false)
  }
  return { dynDatas, loading, addDynDatas }
}

export default useDynDatas
