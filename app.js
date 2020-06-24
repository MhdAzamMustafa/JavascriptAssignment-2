//chaper 21-25
//task1
function task1() {
    var first = prompt("Enter your first name", "Azam");
    var last = prompt("Enter your last name", "Mustafa");
    var fullname = first + " " + last;
    alert("Hello " + fullname);
}

//task2
function task2() {
    var input = prompt("Enter your favorite mobile phone model ", " Samsung Galaxy S6 Edge Plus");
    display = "<b>My favotite phone is </b>:" + input;
    document.getElementById("phone").innerHTML = display;
    display1 = "<b>Lenght of string: </b>" + input.length;
    document.getElementById("lenght").innerHTML = display1;
}

//task3
function task3() {
    var variable = "Pakistani";
    for (var i = 0; i < variable.length; i++) {
        if (variable[i] == "n") {
            index = "Index of 'n' :" + i;
            document.getElementById("country").innerHTML = index;
        }
    }
}

//task4 
function task4() {
    var word = "Hello World";
    for (var i = 8; i < word.length; i++) {
        if (word[i] == "l") {
            on = "<b>String: </b> Hello World <br> <b>Index of last 'l' is :</b> " + i;
            document.getElementById("last").innerHTML = on;

        }
    }
}

//task5
function task5() {
    var character = "Pakistani";
    a = "<b>String: </b>" + character + "<br> <b>Character at index 3 : </b>" + character[3];
    document.getElementById("string").innerHTML = a;
}

//task6
function task6() {
    var string = "Hello"
    var first = prompt("Enter your first name", " Azam");
    var last = prompt("Enter your last name", " Mustafa");
    var fullname = string.concat(first, last);
    alert(fullname);
}

//task 7
function task7() {
    var a = "Hyder";
    var b = "abad";
    var c = "<b>City : </b>" + a + b;
    document.getElementById("city").innerHTML = c;
    var a = "Islam"
    var c = "<b>After replacement :</b> " + a + b;
    document.getElementById("after").innerHTML = c;
}

//task 8 
function task8() {
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    var a = message.replace(/and/g, "&")
    document.getElementById("replace").innerHTML = a;
}

//task 9

function task9() {
    var string = "427";
    var value = parseInt(string);
    screen = "<b>Value: </b>" + string + "<br><b>Type: </b>" + typeof string +
        "<br><b>Value: </b>" + value + "<br><b>Type: </b>" + typeof value;
    document.getElementById("value").innerHTML = screen;
}

//task10
function task10() {
    var input = prompt("Enter any word", "peanuts")
    var input1 = "<b>User input: </b>" + input + "<br><b>Upper case: </b>" + input.toUpperCase();
    document.getElementById("case").innerHTML = input1;
}

//task11
function task11() {
    var input = prompt("Enter your input", "javascript");
    var firstletter = input.slice(0, 1);
    firstletter = firstletter.toUpperCase();
    var otherletter = input.slice(1);
    otherletter = otherletter.toLowerCase();
    var word = "<b>User input: </b>" + input + "<br><b>Tittle case: </b>" + firstletter + otherletter;
    document.getElementById("word").innerHTML = word;
}

//task12
function task12() {
    var num = 35.36; // 35.36
    var n = num.toString();
    var n = n.split(".");// ["35", "36"]
    var result = "<b>Number:  </b>" + num + "<br><b>Result:  </b>" + n[0] + n[1]; // "35" + "36" = "3536"
    document.getElementById("result").innerHTML = result; // result
}

//task13
function task13() {
    var input = prompt("Enter your username", "Azammustafa");
    for (var i = 0; i < input.length; i++) {
        if (input[i] === "@" || input[i] === "." || input[i] === "!" || input[i] === ",") {
            alert("Enter enter a valid username.");
            break;
        }
        else {
            alert("your username is " + input);
        }
        break;
    }

}

//task14
function task14() {
    var input = prompt("Welcome to ABC bakery.What do you wantto order sir/ma'am? ");
    input = input.toLowerCase();
    var item = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
    //            0        1           2         3        4

    for (var i = 0; i <= item.length; i++) {
        if (item[i] == input) {
            var a = input + " is available at index " + i + " in our bakery";
            document.getElementById("seacrh").innerHTML = a;
            break;
        }
        else if (i == item.length) {
            var a = "We are sorry. " + input + " is not available in our bakery "
            document.getElementById("seacrh").innerHTML = a;
        }
    }
}

//task15
function task15() {
    var password = prompt("Enter your password");
    for (var i = 0; i < password.length; i++) {
        if (password.length < 6) {
            alert("password is to short")
            break;
        }
        else if (password[0] === "0" || password[0] === "1" || password[0] === "2" || password[0] === "3" || password[0] === "4" ||
            password[0] === "5" || password[0] === "6" || password[0] === "7" || password[0] === "8" || password[0] === "9") {
            alert("Password can not begin with a number \nPlease enter a valid password")
            break;
        }
        else if (password[i] != 0 || password[i] != 1 || password[i] != 2 || password[i] != 3 || password[i] != 4 || password[i] != 5 ||
            password[i] != 6 || password[i] != 7 || password[i] != 8 || password[i] != 9) {
            alert("Enter same number with password")
            break;
        }
        else if (password[i] === "a" || password[i] === "b" || password[i] === "c" || password[i] === "d" || password[i] === "e" ||
            password[i] === "f" || password[i] === "g" || password[i] === "h" || password[i] === "i" || password[i] === "j" || password[i] === "k" ||
            password[i] === "l" || password[i] === "m" || password[i] === "n" || password[i] === "o" || password[i] === "p" || password[i] === "q" ||
            password[i] === "r" || password[i] === "s" || password[i] === "t" || password[i] === "u" || password[i] === "v" || password[i] === "w" ||
            password[i] === "x" || password[i] === "y" || password[i] === "z" || password[i] === "A" || password[i] === "B" || password[i] === "C" ||
            password[i] === "D" || password[i] === "E" || password[i] === "F" || password[i] === "G" || password[i] === "H" || password[i] === "I" ||
            password[i] === "J" || password[i] === "K" || password[i] === "L" || password[i] === "M" || password[i] === "N" || password[i] === "O" ||
            password[i] === "P" || password[i] === "Q" || password[i] === "R" || password[i] === "S" || password[i] === "T" || password[i] === "U" ||
            password[i] === "V" || password[i] === "W" || password[i] === "X" || password[i] === "Y" || password[i] === "Z" || password[i] === "0" ||
            password[i] === "1" || password[i] === "2" || password[i] === "3" || password[i] === "4" || password[i] === "5" || password[i] === "6" ||
            password[i] === "7" || password[i] === "8" || password[i] === "9") {
            alert(password);
            break;
        }
    }
}

//task16
function task16() {
    var string = "University of karachi";
    var sting = string.split("");
    //var a = string.split(",") + "\n";
    for (var i = 0; i < sting.length; i++) {
        b = sting[i] + "<br>";
        document.write(b);
    }
}

//task17
function task17() {
    var input = prompt("Enter any Word", "Pakistan")
    var last = "<b>User input: </b>" + input + "<br><b>Last character of input: </b>" + input.charAt(input.length - 1);
    document.getElementById("user").innerHTML = last;
}

//task18
function task18() {
    var string = "The quick brown fox jumps over the lazy dog";
    var string = string.toLowerCase();
    var string1 = string.split(" ");
    var the = "";
    for (var i = 0; i < string1.length; i++) {
        if (string1[i] === "the") {
            the++;
        }
    }
    var occurrences = "<b>Text: </b>" + string + "<br>There are " + the++ + " occurrences(s) of word 'the'";
    document.getElementById("count").innerHTML = occurrences;
}


// Chapter # (26-30)
// 1
function mk1() {
    var num = +prompt("Enter a number");
    document.write("<br><br>Number: " + num);
    document.write("<br>round off value: " + Math.round(num));
    document.write("<br>floor value: " + Math.floor(num));
    document.write("<br>ceil value: " + Math.ceil(num));
}

// 2
function mk3() {
    var num = +prompt("Enter a floating point number");
    document.write("<br><br>Number: " + num);
    document.write("<br>round off value: " + Math.round(num));
    document.write("<br>floor value: " + Math.floor(num));
    document.write("<br>ceil value: " + Math.ceil(num));
}
// 3
function mk4() {
    var num = +prompt("Enter a number to display it in absolute");
    document.write("<br><br>The absolute value of " + num + " is " + Math.abs(num));
}
// 4
function mk5() {
    var rand1 = Math.floor(Math.random() * 6 + 1);
    document.write("<br><br><strong>random dice value: </strong>" + rand1);
    var rand1 = Math.floor(Math.random() * 6 + 1);
    document.write("<br><strong>random dice value: </strong>" + rand1);
}
// 5
function mk6() {

    var rand1 = Math.floor(Math.random() * 2 + 1);
    if (rand1 == 1) {
        document.write("<br><br><strong>1<br>random coin value: Tails</strong>");
    } else if (rand1 == 2) {
        document.write("<br><br><strong>2<br>random coin value: Heads</strong>");
    }
}

// 6

function mk7() {
    var rand1 = Math.floor(Math.random() * 100 + 1);
    document.write("<br><br><strong>2<br>random Number between 1 and 100: </strong>" + rand1);
}
// 7
function mk8() {
    var weight = prompt("Enter your weight in kilograms");
    var num = '';
    for (var i = 0; i < weight.length; i++) {
        if (weight.charCodeAt(i) >= 48 && weight.charCodeAt(i) <= 57) {
            num = num + weight[i];
        } else if (weight.charCodeAt(i) == 46) {
            num = num + weight[i];
        } else {
            break;
        }
    }
    document.write("<br><br><strong>The weight of user is " + num + " kilograms</strong>");
}
// 8
function mk9() {
    var rand1 = Math.floor(Math.round() * 10 + 1);
    var userRand = +prompt("Enter a number between 1 and 10");
    if (rand1 == userRand) {
        alert("Congrates you are lucky");
    } else {
        alert("Try again");
    }
}
// Chapter # (31-34)
// 1
function mk10() {
    var currentDate = new Date();
    document.write("<br><br><h3>" + currentDate + "</h3>");
}
// 2
function mk11() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    alert("Current month: " + months[currentMonth]);
}
// 3
function mk12() {
    var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var currentDate = new Date();
    var currentWeekDay = currentDate.getDay();
    document.write("<h3>Today is " + weekDays[currentWeekDay] + "</h3>");
}
// 4
function mk13() {
    var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var currentDate = new Date();
    var currentWeekDay = currentDate.getDay();
    if ((weekDays[currentWeekDay] == 'Sun') || (weekDays[currentWeekDay] == 'Sat')) {
        document.write("<h3>It's Fun day</h3>");
    }
}
// 5
function mk14() {
    var currentDate = new Date();
    if (currentDate.getDate() < 16) {
        document.write("<h3>First fifteen days of the month</h3>");
    } else {
        document.write("<h3>Last days of the month</h3>")
    }
}
// 6
function mk15() {
    var currentDate = new Date();
    var miliSeconds = currentDate.getTime();
    var minutes = miliSeconds / (1000 * 60)
    document.write("<h3>Current date: " + currentDate + "</h3>");
    document.write("<h3>Elapsed seconds since January 1, 1970: " + miliSeconds + "</h3>");
    document.write("<h3>Elapsed minutes since January 1, 1970: " + minutes + "</h3>");
}
// 7
function mk16() {
    var currentDate = new Date();
    var hour = currentDate.getHours();
    if (hour < 11) {
        document.write("<h3>It's AM</h3>");
    } else {
        document.write("<h3>It's PM</h3>");
    }
}
// 8
function mk17() {
    var lastDayOfYear = new Date('Dec 31, 2020');
    document.write("<h3>" + lastDayOfYear + "</h3>");
}
// 9
function mk18() {
    var firstDayOfRamadan = new Date('Apr 24, 2020');
    var currentDate = new Date();
    firstDayOfRamadan = firstDayOfRamadan.getTime();
    currentDate = currentDate.getTime();
    var diff = currentDate - firstDayOfRamadan;
    diff = diff / (1000 * 60 * 60 * 24);
    document.write("<h3>" + Math.floor(diff) + " days have passed since 1st Ramadan, 2020</h3>");
}
// 10
function mk19() {
    var refDate = prompt("Enter Reference Date", "Fri 20, 2020");
    alert(refDate + "<br> " + typeof (refDate));
    var refDate = new Date(refDate);
    var bigOf2015 = new Date('Jan 1, 2015');
    refDate = refDate.getTime();
    bigOf2015 = bigOf2015.getTime();
    var diff = refDate - bigOf2015;
    diff = diff / (1000 * 60);
    document.write("<h3>" + diff + " seconds had passed since beginning of 2015</h3>");
}
// 11
function mk20() {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    currentDate.setHours(currentDate.getHours() + 1)
    document.write("<h3>current date: " + currentDate + "</h3>");
    document.write("<h3>1 hour ago it was " + new Date() + "</h3>");
}
// 12
function mk21() {
    var currentDate = new Date();
    document.write("<h3>current date: " + currentDate + "</h3>");
    currentDate.setFullYear(currentDate.getFullYear() - 100);
    document.write("<h3>100 years back, it was " + currentDate + "</h3>");
}
// 13
function mk23() {
    var age = +prompt("Enter your Age");
    var currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - age);
    document.write("<br><h3>Your age is " + age + "</h3>");
    document.write("<h3>Your birth year is " + currentDate.getFullYear() + "</h3>");
}
// 14
function mk24() {
    var customerName = 'ABC Customer';
    var currentDate = new Date();
    var currentMonth = months[currentDate.getMonth()];
    var numberOfUnits = 410;
    var chargesPerUnit = 16;
    var netAmountPayable = numberOfUnits * chargesPerUnit;
    var latePayable = 350;
    var grossAmount = netAmountPayable + latePayable;

    document.write("<br><h1>K-Electric Bill</h1><br>");
    document.write("<br>Customer Name: <strong>" + customerName + "</strong>");
    document.write("<br>Month: <strong>" + customerName + "</strong>");
    document.write("<br>Number of units: <strong>" + numberOfUnits + "</strong>");
    document.write("<br>Charges per unit: <strong>" + chargesPerUnit + "</strong>");
    document.write("<br><br>Net Amount payable (within Due Date): <strong>" + netAmountPayable + "</strong>");
    document.write("<br>Late Payment Surcharge: <strong>" + latePayable + "</strong>");
    document.write("<br>Gross amount payable (within due date): <strong>" + grossAmount + "</strong>");

}

//chapter 35-38
//task19
function task19() {
    var a = new Date();
    document.getElementById("date").innerHTML = a;
}

//task20
function task20() {
    var first = prompt("Enter your first name", "Azam");
    var last = prompt("Enter your second", " Mustafa");
    var fullname = first + last;
    alert("Hello " + fullname);
}

//task21
function task21() {
    number = +prompt("Add your first number: ", "5");
    number2 = +prompt("Add your second number: ", "9");
    document.getElementById("sum").innerHTML = ("Sum of to integar: " + Task21A(number, number2));
    function Task21A(num1, num2) {
        var sum = num1 + num2;
        return sum;
    }
}

//task22
// function task22(){

// }

//task23
function task23() {
    var num1 = +prompt("Enter first number: ", "6");
    var opr = prompt("Enter your operator sign: ", "+");
    var num2 = +prompt("Enter second number: ", "3");
    alert(task23A(num1, opr, num2));
    function task23A(num1, opr, num2) {
        if (opr === "+") {
            var a = num1 + num2;
        }
        else if (opr === "-") {
            var a = num1 - num2;
        }
        else if (opr === "*") {
            var a = num1 * num2;
        }
        else if (opr === "/") {
            var a = num1 / num2;
        }
        var b = "Your answer is: " + a;
        alert(b);
        return b;
    }
}

//task24
function task24(number) {
    var number = prompt("Enter any number", "2");
    var a = "Your square team is: " + number * number;
    alert(a);
}

//task25
function task25(n) {
    var n = prompt("Enter any number: ", "6")
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    }
    else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
    }
    alert("Factorail of " + n + " is: " + answer);
}

//task26
function task26A(startNumber, endNumber) {
    for (var i = startNumber; i <= endNumber; i++) {
        document.write(i + " <br> ");
    }
}
function task26() {
    var number = prompt("Enter your first number: ");
    var number2 = prompt("Enter your second number: ");
    task26A(number, number2);
}

//task27
function task27() {
    function calculateHypotenuse(base, perpendicular) {
        function calculateSquare(num) {
            return num * num;
        }
        var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular);
        return hypotenuse;
    }
    var base = +prompt("Enter base of Triangle");
    var perpendicular = +prompt("Enter perpendicular of Triangle");
    document.write("<h3>Hypotenuse: " + calculateHypotenuse(base, perpendicular) + "</h3>");
}

//task28
function task28() {
    function areaOfRect(num1, num2) {
        document.write("<br><strong>Area of Rectangle: " + num1 * num2 + "</strong>");
    }
    areaOfRect(2, 2)
    var a = 2, b = 3;
    areaOfRect(a, b);
}

//task29
function task29() {
    var input = prompt("Enter any word", "MOM")
    var checking = "";
    for (var i = input.length - 1; i >= 0; i--) {
        checking += input[i];
    }
    if (input === checking) {
        alert(input + " is palindrome word")
    }
    else {
        alert(input + "is not a palindrome word")
    }
}

//task30
function task30() {
    function firstCapital123(str1) {
        str1 = str1[0].toUpperCase() + str1.slice(1);
        for (var i = 1; i < str1.length; i++) {
            if (str1[i] == ' ') {
                str1 = str1.slice(0, i + 1) + str1[i + 1].toUpperCase() + str1.slice(i + 2);
            }
        }
        document.write("<br><br><strong>" + str1 + "</strong>");
    }
    firstCapital123('the quick brown fox');
}

//task31
function task31() {
    function maxLength(str1) {
        str1 = str1.split(' ');
        var maxl = str1[0];
        for (var i = 1; i < str1.length - 1; i++) {
            if (maxl.length < str1[i].length) {
                maxl = str1[i];
            }
        }
        document.write("<br><br><strong>Max Length Word Is: " + maxl + "</strong>");
    }
    maxLength('Web Development Tutorial');
}

//task32
function task32() {
    function occurrence(str1, alpha) {
        var count = 0;
        for (var i = 0; i < str1.length; i++) {
            if (alpha == str1[i]) {
                count++;
            }
        }
        document.write("<br><br><strong>Occurences of " + alpha + " in " + str1 + " is: " + count + "</strong>");
    }
    occurrence('JSResourceS.com', 'o');
}
//task33
function task33() {
    function calcCircumference(radius) {
        document.write("<br><br><strong>The Circumference Is: " + 2 * 3.14 * radius + "</strong>");
    }
    calcCircumference(2);
    function calcArea(radius) {
        document.write("<br><br><strong>The Area Is: " + 3.14 * radius * radius + "</strong>");
    }
    calcArea(2);
}
