const find = (arr: any, target: any) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].status == target) {
        return arr[i].desc
      }
    }
  
    return "unckown"
  }
  

export default find