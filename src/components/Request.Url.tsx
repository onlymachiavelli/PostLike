const RequestURL = ({...props}) =>{
    return (
        <div className="w-auto block h-auto grid content-center grid-cols-1 m-auto bg-ddark items-center flex-wrap ">
            <button onClick={props.Method} className="px-10 py-3 bg-pink text-white rounded-full">
                METHOD
            </button>

            <input type={"text"} value={props.Value} onChange={props.OnFunc} className="text-white bg-transparent  " />
            <button onClick={props.Send} className="px-10 py-3 bg-pink text-white rounded-full">
                SEND
            </button>
        </div>
    )
}


export default RequestURL