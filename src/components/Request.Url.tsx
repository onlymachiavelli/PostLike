import {SendIcon, Down} from './svg'


const RequestURL = ({...props}) =>{
    return (


        <div className="w-10/12 absolute rounded-full h-auto flex align-center justify-center m-auto bg-ddark items-center flex-wrap m-auto ">
            <button onClick={props.Method} className="px-10 py-3 bg-pink text-white rounded-full  font-bold">
                METHOD
            </button>

            <input type={"text"} value={props.Value} onChange={props.OnFunc} className="text-white bg-transparent w-4/5 pl-2" placeholder="Request URL" />
            <button onClick={props.Send} className="px-11 py-3 bg-pink text-white rounded-full font-bold">
                SEND
            </button>
        </div>
    )
}


export default RequestURL