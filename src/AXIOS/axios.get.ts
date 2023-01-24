import React, { useState, useEffect } from "react"
import axios from "axios"

import jsonFormat from "./string.format"
const publicGet = () => {
  const sendReq = (
    dyn_container: any,
    target: any,
    method: any,
    setStatus: any,
    setDes: any
  ) => {
    axios
      .get(target, {
        headers: {},
        method: method,
        //withCredentials: true,
      })
      .then((res) => {
        dyn_container(jsonFormat(JSON.stringify(res.data)))
        console.log(res.data)
        setStatus(res.status)
        setDes(res.statusText)
      })
      .catch((err) => {
        console.log(err)
        dyn_container(err)
      })
  }

  return { sendReq }
}

export default publicGet

//fake api url
//https://jsonplaceholder.typicode.com/todos/1
