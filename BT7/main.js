function sobithieu(arr){
    if(!Array.isArray(arr)){
        console.log("du lieu khong hop le")
        return
    }
    let n = arr.length + 1
    let tonghoanchinh = ((arr[0] + arr[arr.length - 1]) * n) / 2
    let tongmang = 0
    for(let i = 0 ; i < arr.length ; i++){
        tongmang += arr[i]
    }
    console.log(tonghoanchinh - tongmang)
}
sobithieu([1 , 2 , 3 , 5])
sobithieu([1 , 2 , 4 , 5])
sobithieu("abc")