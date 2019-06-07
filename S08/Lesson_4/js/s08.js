var total = 0;
for (var i = 0; i < 15; i++) {
    if (i == 8 || i == 13) {
        continue;
    }
    var first = Math.floor((Math.random() * 6) + 1);
    var second = Math.floor((Math.random() * 6) + 1);
    console.log("Первая кость: " + first + " Вторая кость: " + second);
    document.getElementById("result").innerHTML += "Первая кость: " + first + " Вторая кость: " + second + "<br>";
    if (first == second) {
        document.getElementById("result").innerHTML += "Выпал дубль. Число " + first + " <br>";
    }
    else if (first < 3 && second > 4) {
        document.getElementById("result").innerHTML += "Большой разброс между костями. Разница составляет: " + Math.abs(second - first) + "<br>";
    }
    total += first + second;
}
total > 100 ? document.getElementById("result").innerHTML += "Победа, вы набрали " + total + " очков"
    : document.getElementById("result").innerHTML += "Вы проиграли, у вас " + total + " очков";