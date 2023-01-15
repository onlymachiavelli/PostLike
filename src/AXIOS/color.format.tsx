import React , {useState, useEffect} from "react"


const Format = () =>{
    const [clr , setColor] : any = useState([])
    const colorFormat = (myString : any ) =>{
        for (let i = 0; i < myString.length; i++) {
            if (myString[i] === '{'|| myString[i] === '[' || myString[i] === '}' || myString[i] === ']' ||myString[i] === ',' ) {
                setColor([...clr, <p className="text-pink">{myString[i]}</p>])
            }
            else if (myString[i] === ':') {
                setColor([...clr, <p className="text-white">{myString[i]}</p>])
            }
            else if (myString[i] == `"` ||myString[i] == `'`) {
                let str : any= myString[i] 
                for (let j=i+1; j<myString.length; j++){
                    if (myString[j] == `"` ||myString[j] == `'`){
                        str += myString[j]
                        setColor([...clr, <p className="text-brown">{str}</p>])
                        i = j
                        break
                    }
                    else{
                        str += myString[j]
                    }
    
                }
    
    
            }
            else {
                setColor([...clr, <p className="text-white">{myString[i]}</p>])
            }
            //else if ()
        }
    
        
    }
    return {clr, setColor , colorFormat}
}


export default Format