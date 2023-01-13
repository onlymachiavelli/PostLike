import React from "react"
import {} from "./../components/svg"

import { Logo } from "../components/Logo"
import Navbar from "../components/navbar"

import RequestURL from "../components/Request.Url"
const Application = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <nav className="w-full p-5 h-auto">
        <Navbar />
        <div className="w-full flex justify-center mt-10">
          <RequestURL />
        </div>
      </nav>

      <div className="w-full h-5/6 flex align-center justify-center mt-20 gap-x-2">
        <aside className="w-1/3 bg-dddark h-3/4">hello world</aside>
        <aside className="w-3/5 bg-dddark h-3/4"></aside>
      </div>
    </div>
  )
}
export default Application
