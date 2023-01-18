import React from "react"

const PopUp = ({ ...props }) => {
  return (
    <div className="w-full h-full bg-dark/80 fixed absolute top-0 flex align-center justify-center invisible">
      <div className="w-1/3 h-auto p-10 tex t-center">
        <p className="text-white font-bold">Choose One Method</p>
      </div>
    </div>
  )
}
export default PopUp
