import React, { useState, useEffect } from "react"

const DataFields = () => {
  const [req, setReq] = useState(String)
  const [prms, setParams] = useState([])

  useEffect(() => {}, [])

  const Decompose = () => {}
  return { prms, Decompose }
}
const ReqUrl = () => {

  const [target, setTarget] = useState(String)
  const [Response, setRes] = useState()



  return {Response , target , setTarget, setRes}
}



export default ReqUrl
