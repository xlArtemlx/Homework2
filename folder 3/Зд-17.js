var size = prompt("Введите размер верхней одежды, платья брюк, российская система")
var yourSize = size - 32 
if (yourSize >= 8){
alert("Ваш размер равен в британской мере  "+ yourSize)
} else if (yourSize < 8) {
 alert("в расчет принимаются размеры от 40")
} else if (isNaN(yourSize)) {
 alert("введите простое число")
}