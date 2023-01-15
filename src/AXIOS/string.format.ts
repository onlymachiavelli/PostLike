


const jsonFormat = (data : any) =>{
    //data should be a string 

    let myString : any  = "" 
    for (let i = 0; i< data.length; i++){
        if (data[i] === '{'){
            myString += '{\n    '
        }
        else if (data[i] === '}'){
            myString += '\n}\n'
        }
        else if (data[i] === ','){
            myString += ',\n    '
        }
        else{
            myString += data[i]
        }    
    }

    return myString
}




export default jsonFormat