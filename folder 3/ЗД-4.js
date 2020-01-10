var userAge = prompt("Give me your age")
 if (isNaN(userAge)) {
 console.log("naberi zanovo") 
 } else if (userAge > 0) {
 alert(2019 - userAge)     // ввел 2019, потому что только у малого процента людей был др уже в 2020.
} else if (userAge < 0) {
 alert("ne vernoe chislo") 
}