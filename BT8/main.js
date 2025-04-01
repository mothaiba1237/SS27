function solonnhat(num){
    if(isNaN(num) || !Number.isInteger(num)){
        console.log("du lieu khong hop le")
        return
    }
    let str = num.toString().split('')
    str.sort((a , b) => b - a)
    let max = str.join('')
    console.log(max)
}
solonnhat(2941)
solonnhat(3875)
solonnhat("1h8t")