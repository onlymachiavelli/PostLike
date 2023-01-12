import { SendIcon, Down } from "./svg"

const RequestURL = ({ ...props }) => {
  return (
    <div className="w-10/12 absolute rounded-full h-auto flex align-center justify-center m-auto bg-ddark items-center flex-wrap m-auto ">
      <button
        onClick={props.Method}
        className="w-1/6 py-3 bg-pink text-white rounded-full  font-bold flex items-center justify-center"
      >
        METHOD &nbsp;
        <Down Width="20" Height="20" />
      </button>

      <input
        type={"text"}
        value={props.Value}
        onChange={props.OnFunc}
        className="text-white bg-transparent w-4/6 pl-2"
        placeholder="Request URL"
      />
      <button
        onClick={props.Send}
        className="w-1/6 py-3 bg-pink text-white rounded-full font-bold flex align-center justify-center"
      >
        SEND &nbsp;
        <SendIcon Width="25" Height="25" />
      </button>
    </div>
  )
}

export default RequestURL
