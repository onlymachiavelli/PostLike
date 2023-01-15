import React , {useState, useEffect} from "react"


const Format = () =>{
    const [clr , setColor] : any = useState("")
    let color : any= "" 
    const colorFormat = (myString : any ) =>{
        for (let i = 0; i < myString.length; i++) {
            if (myString[i] === '{'|| myString[i] === '[' || myString[i] === '}' || myString[i] === ']' ||myString[i] === ',' ) {
                //setColor([...clr, <p className="text-pink">{myString[i]}</p>])
                color += `<p className="text-pink">${myString[i]}</p>`
            }
            else if (myString[i] === ':') {
                //setColor([...clr, <p className="text-white">{myString[i]}</p>])
                color += `<p className="text-white">${myString[i]}</p>`
            }
            else if (myString[i] == `"` ||myString[i] == `'`) {
                let str : any= myString[i] 
                for (let j=i+1; j<myString.length; j++){
                    if (myString[j] == `"` ||myString[j] == `'`){
                        str += myString[j]
                        //setColor([...clr, <p className="text-brown">{str}</p>])
                        color += `<p className="text-brown">${str}</p>`

                        i = j
                        break
                    }
                    else{
                        str += myString[j]
                    }
    
                }
    
    
            }
            else {
                //setColor([...clr, <p className="text-white">{myString[i]}</p>])
                color += `<p className="text-white">${myString[i]}</p>`
            }
            //else if ()

            setColor(color)
        }

        
        
    
        
    }
    return {clr, setColor , colorFormat, color}
}


export default Format