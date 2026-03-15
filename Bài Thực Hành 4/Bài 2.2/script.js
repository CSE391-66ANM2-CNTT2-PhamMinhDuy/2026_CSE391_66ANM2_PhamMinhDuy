let form = document.getElementById("orderForm")

let product = document.getElementById("product")
let quantity = document.getElementById("quantity")
let date = document.getElementById("date")
let address = document.getElementById("address")
let note = document.getElementById("note")

let total = document.getElementById("total")
let counter = document.getElementById("counter")


function error(id,msg){
document.getElementById(id).innerText = msg
}

function clear(id){
document.getElementById(id).innerText = ""
}


function tinhTien(){

let gia = 0

if(product.value == "ao") gia = 150000
if(product.value == "quan") gia = 200000
if(product.value == "giay") gia = 300000

let sl = quantity.value

if(gia > 0 && sl > 0){
let tong = gia * sl
total.innerText = tong
}

}

product.addEventListener("change",tinhTien)
quantity.addEventListener("input",tinhTien)



function checkProduct(){

if(product.value == ""){
error("productError","Phải chọn sản phẩm")
return false
}

clear("productError")
return true
}


function checkQuantity(){

let q = quantity.value

if(q < 1 || q > 99){
error("quantityError","Số lượng từ 1-99")
return false
}

clear("quantityError")
return true
}


function checkDate(){

let today = new Date()
let d = new Date(date.value)

let diff = (d - today) / (1000*60*60*24)

if(diff < 0 || diff > 30){
error("dateError","Ngày phải trong 30 ngày tới")
return false
}

clear("dateError")
return true
}


function checkAddress(){

if(address.value.length < 10){
error("addressError","Địa chỉ ít nhất 10 ký tự")
return false
}

clear("addressError")
return true
}


function checkNote(){

let len = note.value.length

counter.innerText = len + "/200"

if(len > 200){
error("noteError","Tối đa 200 ký tự")
counter.style.color = "red"
return false
}

counter.style.color = "black"
clear("noteError")
return true
}

note.addEventListener("input",checkNote)



function checkPay(){

let pay = document.querySelector('input[name="pay"]:checked')

if(!pay){
error("payError","Chọn phương thức thanh toán")
return false
}

clear("payError")
return true
}



form.addEventListener("submit",function(e){

e.preventDefault()

let ok = true

if(!checkProduct()) ok = false
if(!checkQuantity()) ok = false
if(!checkDate()) ok = false
if(!checkAddress()) ok = false
if(!checkNote()) ok = false
if(!checkPay()) ok = false


if(ok){

let ten = product.options[product.selectedIndex].text
let sl = quantity.value
let money = total.innerText
let d = date.value

let box = document.getElementById("confirmBox")

box.style.display = "block"

box.innerHTML =
"Xác nhận đơn hàng <br><br>" +
"Sản phẩm: " + ten + "<br>" +
"Số lượng: " + sl + "<br>" +
"Tổng tiền: " + money + "<br>" +
"Ngày giao: " + d + "<br><br>" +
"<button id='yes'>Xác nhận</button>" +
"<button id='no'>Hủy</button>"


document.getElementById("yes").onclick = function(){

form.style.display = "none"
box.style.display = "none"

document.getElementById("success").innerText =
"Đặt hàng thành công "

}


document.getElementById("no").onclick = function(){

box.style.display = "none"

}

}

})