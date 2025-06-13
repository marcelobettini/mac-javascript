// alert("Hola chiques")

// let fullName = ""
// let age = 0
// let hobby = ""
// fullName = prompt("Nombre y Apellido")
// age = prompt("Edad")
// hobby = prompt("Hobby?")

// alert("Nombre: "+fullName + ".\nEdad: "+ age +".\n"+"Hobby: "+ hobby+".")

// let num1 = 0
// let num2 = 0
// let result = 0

// num1 = prompt("Ingrese primer número")
// num2 = prompt("Ingrese segundo número")
// result = Number(num1) + Number(num2)
// alert("El resultado es " + result)

let emailOk = "pepesanchez@eltony.com"
let passwordOk = "1234abcd"
let email = ""
let password = ""
email = prompt("Ingrese su email")
password = prompt("Ingrese su password")

if(emailOk === email || passwordOk === password){
    alert("Acceso concedido, su majestad!")
}else {
    alert("No pasás ni con orden judicial")
}