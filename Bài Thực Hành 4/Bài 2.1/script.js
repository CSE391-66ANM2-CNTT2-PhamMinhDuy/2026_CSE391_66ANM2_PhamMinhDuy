let form = document.getElementById("formDangKy")

let fullname = document.getElementById("fullname")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let password = document.getElementById("password")
let confirm = document.getElementById("confirm")
let terms = document.getElementById("terms")

function error(id,msg){
    document.getElementById(id).innerText = msg
}

function clear(id){
    document.getElementById(id).innerText = ""
}


function checkFullname(){

    let v = fullname.value.trim()

    if(v=="" || v.length <3){
        error("fullnameError","Tên ít nhất 3 ký tự")
        return false
    }

    clear("fullnameError")
    return true
}


function checkEmail(){

    let v = email.value

    if(!v.includes("@")){
        error("emailError","Email không hợp lệ")
        return false
    }

    clear("emailError")
    return true
}


function checkPhone(){

    let v = phone.value

    if(v.length !=10 || v[0]!="0"){
        error("phoneError","SĐT phải 10 số và bắt đầu 0")
        return false
    }

    clear("phoneError")
    return true
}


function checkPassword(){

    let v = password.value

    if(v.length <8){
        error("passwordError","Mật khẩu ≥8 ký tự")
        return false
    }

    clear("passwordError")
    return true
}


function checkConfirm(){

    if(confirm.value != password.value){
        error("confirmError","Mật khẩu không khớp")
        return false
    }

    clear("confirmError")
    return true
}


function checkGender(){

    let g = document.querySelector('input[name="gender"]:checked')

    if(!g){
        error("genderError","Chọn giới tính")
        return false
    }

    clear("genderError")
    return true
}


function checkTerms(){

    if(!terms.checked){
        error("termsError","Phải đồng ý điều khoản")
        return false
    }

    clear("termsError")
    return true
}


fullname.addEventListener("blur",checkFullname)
email.addEventListener("blur",checkEmail)
phone.addEventListener("blur",checkPhone)
password.addEventListener("blur",checkPassword)
confirm.addEventListener("blur",checkConfirm)


fullname.addEventListener("input",()=>clear("fullnameError"))
email.addEventListener("input",()=>clear("emailError"))
phone.addEventListener("input",()=>clear("phoneError"))
password.addEventListener("input",()=>clear("passwordError"))
confirm.addEventListener("input",()=>clear("confirmError"))


form.addEventListener("submit",function(e){

    e.preventDefault()

    let ok =
        checkFullname() &
        checkEmail() &
        checkPhone() &
        checkPassword() &
        checkConfirm() &
        checkGender() &
        checkTerms()

    if(ok){

        form.style.display="none"

        document.getElementById("success").innerHTML =
        "Đăng ký thành công 🎉<br>Xin chào "+fullname.value
    }

})