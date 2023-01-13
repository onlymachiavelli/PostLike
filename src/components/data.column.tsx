import React from "react"

import { Trash } from "./svg"
const DataColumn = ({ ...props }) => {
  return (
    <tr>
      <td className="text-white bg-ddark  text-center w-1/3 text-sm">
        <input
          type={"text"}
          value={props.Value}
          onChange={props.OnFunc}
          className="text-white bg-transparent w-full pl-3"
          placeholder="Data Key"
        />
      </td>
      <td className="text-white bg-ddark p-3 text-center text-sm">
        <input
          type={"text"}
          value={props.Value}
          onChange={props.OnFunc}
          className="text-white bg-transparent w-full"
          placeholder="Data Value"
        />
      </td>
      <td className="text-white bg-pink p-3 text-center text-sm">
        <button>
          <Trash Width="20" Height="20" />
        </button>
      </td>
    </tr>
  )
}

export default DataColumn
