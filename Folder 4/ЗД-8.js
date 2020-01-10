var str = "Привет мир"
var chislo = 0
for(i = 0; i < str.length; i++) {
           chislo += str.charCodeAt(i) // почему если перествить местами слагаеммые в этой строчки, результата не будет??
}
alert(chislo) 