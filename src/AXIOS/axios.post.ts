import axios from 'axios'
import jsonFormat from './string.format'
import { find } from 'domutils'
const usePublicPost = () =>{

const sendReq = (dyn_container: any,
    target: any,
    method: any,
    setStatus: any,
    setDes: any) =>{
    axios.post(target, {
        headers: {},
        method: method,
        //withCredentials: true,
      })
      .then((res) => {
        dyn_container(jsonFormat(JSON.stringify(res.data)))
        console.log(res.data)
        setStatus(res.status)
        setDes(res.statusText ? res.statusText : find(Stat, res.status))
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
        dyn_container(err)
      })
    }
    return {}
}