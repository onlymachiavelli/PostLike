import React, {useState, useEffect} from "react"
const PopUp = ({ ...props }) => {
  return (
    <div className={`w-full h-full bg-dark/80 fixed absolute top-0 flex align-center justify-center ${props.Visibility}`}>
      <div className="w-1/3 m-auto  bg-dddark h-auto p-10 text-center rounded">
        <p className="text-white font-bold">Choose One Method</p>
        <br />
        <div className=" flex gap-x-4">
          <button
            onClick={()=>{
            }}
            className="w-1/3 py-3 bg-pink m-auto text-white rounded   font-bold flex items-center justify-center"
            
          >
            GET
          </button>

          <button
            onClick={()=>{
            }}
            className="w-1/3  py-3 bg-pink m-auto text-white rounded   font-bold flex items-center justify-center"
          >
            POST
          </button>

          <button
            onClick={()=>{

            }}
            className="w-1/3  py-3 bg-pink m-auto text-white rounded   font-bold flex items-center justify-center"
          >
            DELETE
          </button>
        </div>
        <br />
        <div className=" flex gap-x-4">
          <button
            onClick={()=>{

            }}
            className="w-1/2 py-3 bg-pink m-auto text-white rounded   font-bold flex items-center justify-center"
          >
            PUT
          </button>

          <button
            onClick={()=>{
            }}
            className="w-1/2 py-3 bg-pink m-auto text-white rounded   font-bold flex items-center justify-center"
          >
            PATCH
          </button>
        </div>
      </div>
    </div>
  )
}
export default PopUp
