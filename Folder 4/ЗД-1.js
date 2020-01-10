var text = prompt("введи число")
var num = Number(text)
var chislo = 0
for( var i = 0; i <= num; i++ ) {
   if ( i % 2 == 0) {
    chislo += i
    chislo * 2 
 }
}
alert(chislo)