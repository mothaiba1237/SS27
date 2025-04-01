function menu(r , cd , cr){
    let choice
    do{
        console.log("1.Tinh dien tich hinh tron\n2.tinh chu vi hinh tron\n3.Tinh dien tich hinh chu nhat\n4.Tinh chu vi hinh chu nhat\n5.Thoat")
        choice = parseInt(prompt("nhap vao lua chon cua ban: "))
        switch(choice){
            case 1:
                let St = Math.PI * r * r
                console.log("dien tich hinh tron la: " + St)
                break
            case 2:
                let Ct = Math.PI * 2 * r
                console.log("chu vi hinh tron la: " + Ct)
                break
            case 3:
                let Shcn = cd * cr
                console.log("dien tich hinh chu nhat la: " + Shcn)
                break
            case 4:
                let Chcn = 2 * (cd + cr)
                console.log("chu vi hinh chu nhat la: " + Chcn)
                break
            case 5:
                console.log("thoat chuong trinh")
                break
            default:
                console.log("nhap khong hop le")
        }
    }while(choice != 5)
}
menu(2 , 3 , 4)