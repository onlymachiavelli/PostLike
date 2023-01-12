import React from "react"
import {} from './../components/svg'

import { Logo } from "../components/Logo"
import Navbar from "../components/navbar"

import RequestURL from "../components/Request.Url"
const Application = () => {
  return (
    <div>
      <nav className="w-full h-auto p-5">
        <Navbar/>
        <div className="w-full flex justify-center mt-10">
          <RequestURL/>
        </div>
      </nav>
    </div>
  )
}
export default Application
