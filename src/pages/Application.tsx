import React from "react"
import { Plus } from "./../components/svg"
import Fields from "../components/addColumn"
import { Logo } from "../components/Logo"
import Navbar from "../components/navbar"

import RequestURL from "../components/Request.Url"
import DataColumn from "../components/data.column"
const Application = () => {
  const { fields, addField, Clear } = Fields()
  return (
    <div className="w-full h-screen overflow-hidden">
      <nav className="w-full p-5 h-auto">
        <Navbar />
        <div className="w-full flex justify-center mt-10">
          <RequestURL />
        </div>
      </nav>

      <div className="w-full h-5/6 flex align-center justify-center mt-20 gap-x-2">
        <aside className="w-5/12 bg-dddark h-3/4 rounded-sm overflow-y-scroll pb-5">
          <div className="w-full h-auto p-3 bg-ddark rounded-sm overflow-hidden mb-2">
            <div className="flex w-full h-auto  align-center  justify-between">
              <p className="text-white font-bold "> REQUEST QUERY </p>
              <p className="text-white text-sm pt-0.5">Method : GET</p>
            </div>
          </div>
          <table className="w-11/12 m-auto border-collapse border-dddark">
            <tr>
              <td className="text-white bg-ddark p-3 text-center w-1/3 text-sm">
                REQUEST PARAMS
              </td>
              <td className="text-white bg-ddark p-3 text-center text-sm">
                VALUE
              </td>
              <td className="text-white bg-pink p-3 text-center text-sm">
                

                <button className="font-bold" onClick={()=>{
                  Clear()
                }}>
                  CLEAR
                </button>
              </td>
            </tr>
            {
              //map the fields
              fields.map((field: any, index: any) => {
                return field
              })
            }
          </table>
          <button
            className="w-auto h-auto bg-pink rounded-full px-2 py-2 block  m-auto mt-4"
            onClick={() => {
              addField()
            }}
          >
            <Plus Width="15" Height="15" />
          </button>
        </aside>
        <aside className="w-1/2 bg-dddark h-3/4 rounded-sm overflow-hidden">
          <div className="w-full h-auto p-3 bg-ddark rounded-sm overflow-hidden">
            <div className="flex w-full h-auto  align-center  justify-between">
              <p className="text-white font-bold">RESPONSE BOX</p>
              <p className="text-pink text-sm pt-0.5 flex">
                STATUS :&nbsp;<p className="text-green"> 200 (OK)</p>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
export default Application
