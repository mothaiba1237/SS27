function menu(a , b){
    let choice
    do{
        console.log("1.Cong hai so\n2.Tru hai so\n3.Nhan 2 so\n4.Chia hai so\n5.Thoat")
        choice = parseInt(prompt("nhap vao lua chon cua ban: "))
        switch(choice){
            case 1:
                let sum = a + b
                console.log(sum)
                break
            case 2:
                let hieu = a - b
                console.log(hieu)
                break
            case 3:
                let tich = a * b
                console.log(tich)
                break
            case 4:
                let thuong = a / b
                console.log(thuong)
                break
            case 5:
                console.log("thoat chuong trinh")
                break
            default:
                console.log("nhap khong hop le")
        }
    }while(choice != 5)
}
menu(4 , 2)