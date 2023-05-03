import React, { useState, useEffect } from "react"

const useDynDatas = () => {
  const [dynDatas, setDynDatas] = useState([
    { id: 1, key: "key1", value: "value1" },
  ])

  /*
  
    simulate loading data from server

    {
        "id": numeric,
        key : String,
        value : String
    }
  */
  const [loading, setLoading] = useState(true)

  useEffect(() => {}, [])
  const addDynDatas = () => {
    setDynDatas(
    


      [
        ...dynDatas,
        {
          id: dynDatas.length + 1,
          key: "key" + (dynDatas.length + 1),
          value: "value" + (dynDatas.length + 1),
        },
      ]
    )
    setLoading(false)
  }
  return { dynDatas, loading, addDynDatas }
}

export default useDynDatas
