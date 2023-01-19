import React, {useState, useEffect} from "react"



export const [Visible, setVisible] = useState(false)
export const useSetMethod = () =>{
  
  //get by default
  const [method, setM] = useState("GET")
  const setMethod = (e:any) =>{
    setM(e.target.innerText)
  }




  return {method, setMethod, setM}
}

const PopUp = ({ ...props }) => {
  return (
    <div className={`w-full h-full bg-dark/80 fixed absolute top-0 flex align-center justify-center ${Visible ? "visible" : "invisible"}`}>
      <div className="w-1/3 m-auto  bg-dddark h-auto p-10 text-center rounded">
        <p className="text-white font-bold">Choose One Method</p>
        <br />
        <div className=" flex gap-x-4">
          <button
            onClick={()=>{
              useSetMethod().setMethod("GET")

              setVisible(false)

            }}
            className="w-1/3 py-3 bg-pink m-auto text-white rounded   font-bold flex items-center justify-center"
            
          >
            GET
          </button>

          <button
            onClick={()=>{
              useSetMethod().setMethod("POST")
              setVisible(false)
            }}
            className="w-1/3  py-3 bg-pink m-auto text-white rounded   font-bold flex items-center justify-center"
          >
            POST
          </button>

          <button
            onClick={()=>{
              useSetMethod().setMethod("DELETE")
              setVisible(false)

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
              useSetMethod().setMethod("PUT")
              setVisible(false)

            }}
            className="w-1/2 py-3 bg-pink m-auto text-white rounded   font-bold flex items-center justify-center"
          >
            PUT
          </button>

          <button
            onClick={()=>{
              useSetMethod().setMethod("PATCH")
              setVisible(false)
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
