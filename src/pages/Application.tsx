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
        <aside className="w-1/3 bg-dddark h-3/4 rounded-sm ">
          <div className="w-full h-auto p-3 bg-ddark rounded-sm overflow-hidden">
            <div className="flex w-full h-auto  align-center  justify-between">
              <p className="text-white font-bold">REQUEST QUERY</p>
              <p className="text-white text-sm pt-1">Method : GET</p>
            </div>
          </div>
        </aside>
        <aside className="w-3/5 bg-dddark h-3/4 rounded-sm overflow-hidden">
          <div className="w-full h-auto p-3 bg-ddark rounded-sm overflow-hidden">
            <div className="flex w-full h-auto  align-center  justify-between">
              <p className="text-white font-bold">RESPONSE BOX</p>
              <p className="text-pink text-sm pt-1">
                STATUS:<p className="text-green"> 200 (OK)</p>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
export default Application
