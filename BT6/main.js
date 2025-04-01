function capsocong(arr){
    if(!Array.isArray(arr) || arr.length < 2){
        return "du lieu khong hop le"
    }
    let check = arr[1] - arr[0]
    for(let i = 2 ; i < arr.length ; i++){
        if(arr[i] - arr[i - 1] != check){
            return false
        }
    }
    return true
}
console.log(capsocong([2 , 4 , 6 , 8]))
console.log(capsocong([3 , 6 , 9 , 12 , 14]))
console.log(capsocong(["abc"]))