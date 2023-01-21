import React, {useState, useEffect} from "react"
const PopUp = ({ ...props }) => {
  return (
    <div className={`w-full h-full bg-dark/80 fixed absolute top-0 flex align-center justify-center ${props.Visibile}`}>
      <div className="w-1/3 m-auto  bg-dddark h-auto p-10 text-center rounded">
        <p className="text-white font-bold text-2xl">Choose One Method</p>
        <br />
        <div className=" flex gap-x-4">
          <button
            onClick={()=>{
              {
                props.onGet
                props.Hide()
              }
            }}
            className="w-1/3 py-3 bg-pink m-auto text-white rounded   font-bold flex items-center justify-center  hover:bg-[#bf1131]"
            
          >
            GET
          </button>

          <button
            onClick={()=>{
              {
                props.onPost
                props.Hide()
              }
            }}
            className="w-1/3  py-3 bg-pink m-auto text-white rounded   font-bold flex items-center justify-center  hover:bg-[#bf1131]"
          >
            POST
          </button>

          <button
            onClick={()=>{
              {
                props.onDelete
                props.Hide()
              }

            }}
            className="w-1/3  py-3 bg-pink m-auto text-white rounded   font-bold flex items-center justify-center  hover:bg-[#bf1131]"
          >
            DELETE
          </button>
        </div>
        <br />
        <div className=" flex gap-x-4">
          <button
            onClick={()=>{
              {
                props.onPut
                props.Hide()

              }

            }}
            className="w-1/2 py-3 bg-pink m-auto text-white rounded   font-bold flex items-center justify-center  hover:bg-[#bf1131]"
          >
            PUT
          </button>

          <button
            onClick={()=>{
              {
                props.onPatch
                props.Hide()
              }
            }}
            className="w-1/2 py-3 bg-pink m-auto text-white rounded   font-bold flex items-center justify-center  hover:bg-[#bf1131]"
          >
            PATCH
          </button>
        </div>
      </div>
    </div>
  )
}
export default PopUp
