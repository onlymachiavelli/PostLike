import React, { useState, useEffect } from "react"

const DataFields = () => {
  const [req, setReq] = useState(String)
  const [prms, setParams] = useState([])
  const [status, setStatus] = useState()
  useEffect(() => {}, [])

  const Decompose = () => {}
  return { prms, Decompose }
}
const ReqUrl = () => {
  const [target, setTarget]: any = useState(String)
  const [Response, setRes]: any = useState()

  return { Response, target, setTarget, setRes }
}

export default ReqUrl
