/* Login Form*/


/* UserName & PassWord Validation & Visibility*/

function validateEnter() {

    var userName = document.getElementById("userName").value;
    var pass = document.getElementById("passwordInput").value;
    if (userName != "abcd") {
        document.getElementById("tooltiptext1").style.visibility = "visible";
    }

    if (pass != "1234") {
        document.getElementById("tooltiptext2").style.visibility = "visible";
    }
    else if (userName == "abcd" && pass == "1234") { // if the validation is true, the login form is hidden and the buttons form is visible to the player.
        document.getElementById("loginForm").style.visibility = "hidden";
        document.getElementById("buttons").style.visibility = "visible";
        document.getElementById("tooltiptext1").style.visibility = "hidden";
        document.getElementById("tooltiptext2").style.visibility = "hidden";
    }
}
/*End Of UserName & PassWord Validation & Visibility*/



function showPass() {   //by hovering the 'eye' symbol the password type is changing to text type and visible to the user.
    var x = document.getElementById("passwordInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


// pressing the enter button(on the keybord) is equal to clicking to 'enter' sign in the form. 
addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("enterBtn").click();
    }
});


/*End Login Form*/




function myFunction() {
    var x = document.getElementById("userName").value;
    document.getElementById("playerName").innerHTML = "Hello " + x + "!";
}


/* Levels Form*/


// original Matrix for first games.
var mat = [[9, 8, 4, 5, 3, 1, 6, 7, 2],
[6, 1, 3, 8, 2, 7, 5, 4, 9],
[2, 5, 7, 6, 4, 9, 8, 3, 1],
[3, 7, 8, 9, 6, 2, 4, 1, 5],
[5, 6, 1, 3, 7, 4, 9, 2, 8],
[4, 2, 9, 1, 8, 5, 7, 6, 3],
[8, 3, 2, 4, 9, 6, 1, 5, 7],
[7, 4, 5, 2, 1, 8, 3, 9, 6],
[1, 9, 6, 7, 5, 3, 2, 8, 4]];


function randomHard() { //Hard Level. randomaly picking two numbers between 1-8 and putting and putting them in the index of the max.
    for (var i = 0; i < 21; i++) {
        var x = (Math.floor(Math.random() * 9 - 1) + 1);
        var y = (Math.floor(Math.random() * 9 - 1) + 1);
        document.getElementById("c" + x + y).value = mat[x][y];
        document.getElementById("c" + x + y).readOnly = true; // every input the is chosen by its index is getting a 'readOnly' attribute.

    }
}

function randomMedium() { //Medium Level
    for (var i = 0; i < 42; i++) {
        var x = (Math.floor(Math.random() * 9 - 1) + 1);
        var y = (Math.floor(Math.random() * 9 - 1) + 1);
        document.getElementById("c" + x + y).value = mat[x][y];
        document.getElementById("c" + x + y).readOnly = true;
    }
}

function randomEasy() { //Easy Level
    for (var i = 0; i < 62; i++) {
        var x = (Math.floor(Math.random() * 9 - 1) + 1);
        var y = (Math.floor(Math.random() * 9 - 1) + 1);
        document.getElementById("c" + x + y).value = mat[x][y];
        document.getElementById("c" + x + y).readOnly = true;
    }
}

/*End Of Levels Form*/



/* New Games Buttons*/

function newGameHard() {

    var matrix = [["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""]];


    var mat = [
        [3, 7, 8, 9, 6, 2, 4, 1, 5],
        [5, 6, 1, 3, 7, 4, 9, 2, 8],
        [4, 2, 9, 1, 8, 5, 7, 6, 3],
        [8, 3, 2, 4, 9, 6, 1, 5, 7],
        [7, 4, 5, 2, 1, 8, 3, 9, 6],
        [1, 9, 6, 7, 5, 3, 2, 8, 4],
        [9, 8, 4, 5, 3, 1, 6, 7, 2],
        [6, 1, 3, 8, 2, 7, 5, 4, 9],
        [2, 5, 7, 6, 4, 9, 8, 3, 1]];

    for (var i = 0; i < 9; i++) { // cleans the game sheet for the new game.
        for (var j = 0; j < 9; j++) {
            document.getElementById("c" + i + j).value = matrix[i][j];
            document.getElementById("c" + i + j).readOnly = false;
        }
    }
    for (var i = 0; i < 21; i++) { //Taking new numbers from the new mat in the function and putting them in the index and input id.
        var x = (Math.floor(Math.random() * 9 - 1) + 1);
        var y = (Math.floor(Math.random() * 9 - 1) + 1);
        document.getElementById("c" + x + y).value = mat[x][y];// putting the indexes into th 'id' of the input and the put the number in the game sheet
        document.getElementById("c" + x + y).readOnly = true;// making the input for readonly.
    }
}
//same as above with level changes
function newGameMedium() {

    var matrix = [["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""]];



    var mat = [
        [3, 7, 8, 9, 6, 2, 4, 1, 5],
        [5, 6, 1, 3, 7, 4, 9, 2, 8],
        [4, 2, 9, 1, 8, 5, 7, 6, 3],
        [8, 3, 2, 4, 9, 6, 1, 5, 7],
        [7, 4, 5, 2, 1, 8, 3, 9, 6],
        [1, 9, 6, 7, 5, 3, 2, 8, 4],
        [9, 8, 4, 5, 3, 1, 6, 7, 2],
        [6, 1, 3, 8, 2, 7, 5, 4, 9],
        [2, 5, 7, 6, 4, 9, 8, 3, 1]];


    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            document.getElementById("c" + i + j).value = matrix[i][j];
            document.getElementById("c" + i + j).readOnly = false;
        }
    }
    for (var i = 0; i < 42; i++) {
        var x = (Math.floor(Math.random() * 9 - 1) + 1);
        var y = (Math.floor(Math.random() * 9 - 1) + 1);
        document.getElementById("c" + x + y).value = mat[x][y];
        document.getElementById("c" + x + y).readOnly = true;
    }
}

//same as above with level changes
function newGameEasy() {

    var matrix = [["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""]];


    var mat = [
        [8, 3, 2, 4, 9, 6, 1, 5, 7],
        [7, 4, 5, 2, 1, 8, 3, 9, 6],
        [1, 9, 6, 7, 5, 3, 2, 8, 4],
        [9, 8, 4, 5, 3, 1, 6, 7, 2],
        [6, 1, 3, 8, 2, 7, 5, 4, 9],
        [2, 5, 7, 6, 4, 9, 8, 3, 1],
        [3, 7, 8, 9, 6, 2, 4, 1, 5],
        [5, 6, 1, 3, 7, 4, 9, 2, 8],
        [4, 2, 9, 1, 8, 5, 7, 6, 3],];

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            document.getElementById("c" + i + j).value = matrix[i][j];
            document.getElementById("c" + i + j).readOnly = false;
        }
    }
    for (var i = 0; i < 62; i++) {
        var x = (Math.floor(Math.random() * 9 - 1) + 1);
        var y = (Math.floor(Math.random() * 9 - 1) + 1);
        document.getElementById("c" + x + y).value = mat[x][y];
        document.getElementById("c" + x + y).readOnly = true;
    }
}

/*End of new games buttons*/


/*Diplay game board according to the lvl button.*/

function displayHard() {
    document.getElementById("theGame").style.visibility = "visible"; //showing the game board
    document.getElementById("buttons").style.visibility = "hidden"; // hiding the btn form
    document.getElementById("ingameBtn").style.visibility = "visible"; // showing the Byside game form
    document.getElementById("easynewgame").style.display = "none"; // none displaying easynewgame button
    document.getElementById("mediumnewgame").style.display = "none";// none displaying mediumnewgame button
    document.getElementById("hardnewgame").style.display = "block"; // showing hardnewgame button
}
function displayMadium() {
    document.getElementById("theGame").style.visibility = "visible"; //same as above according to the lvl button
    document.getElementById("buttons").style.visibility = "hidden";
    document.getElementById("ingameBtn").style.visibility = "visible";
    document.getElementById("easynewgame").style.display = "none";
    document.getElementById("mediumnewgame").style.display = "block";
    document.getElementById("hardnewgame").style.display = "none";
}
function displayEasy() {
    document.getElementById("theGame").style.visibility = "visible"; //same as above according to the lvl button
    document.getElementById("buttons").style.visibility = "hidden";
    document.getElementById("ingameBtn").style.visibility = "visible";
    document.getElementById("hardnewgame").style.display = "none";
    document.getElementById("mediumnewgame").style.display = "none";
    document.getElementById("easynewgame").style.display = "block";
}





/* Checking the Matrix*/
function checkMat() {



    var flag = false;
    var arr = [];


    for (var row = 0; row < mat.length; row++) { // going threw the indexes of a row 
        for (var col = 0; col < mat[row].length; col++) {
            var x = mat[row][col];
            arr.push(x);//and putting the numbers in an array
        }
        arr = arr.sort(function (a, b) { return a - b }); // sorting the array from 1-9
        for (var j = 0; j < arr.length - 1; j++) {
            if (!(arr[j] != arr[j + 1])) { // a for loop the cheking a number in a array and the number in the index next to him and cheking if theyre alike.
                alert("Try Again!");// if the numbers are the same. somthings not right/
                return false;
            }
            else if (arr.length != 8) {
                alert("Try Again!");
                return false;
            }
        }
        flag = false;
        var arr = [];
    }
    for (var col = 0; col < 9; col++) {
        for (var row = 0; row < 9; row++) {
            var x = mat[row][col];
            arr.push(x);
        }
        arr = arr.sort(function (a, b) { return a - b });
        for (var j = 0; j < arr.length - 1; j++) {
            if (!(arr[j] != arr[j + 1])) {
                alert("Try Again!");
                return false;
            }
            else if (arr.length != 8) {
                alert("Try Again!");
                return false;
            }
        }
        flag = false;
        var arr = [];
    }

    for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {
            var x = mat[row][col];
            arr.push(x);
        }
        arr = arr.sort(function (a, b) { return a - b });
        for (var j = 0; j < arr.length - 1; j++) {
            if (!(arr[j] != arr[j + 1])) {
                alert("Try Again!");
                return false;
            }
            else if (arr.length != 8) {
                alert("Try Again!");
                return false;
            }
        }
        flag = false;
        var arr = [];
    }

    alert("Well Done!");

}



/* Back to lvl forms btn*/
function back2Lvl() {
    document.getElementById("theGame").style.visibility = "hidden";
    document.getElementById("buttons").style.visibility = "visible";
    document.getElementById("ingameBtn").style.visibility = "hidden";

    var matrix = [["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""]];


    for (var i = 0; i < 9; i++) { // cleaning the game sheet
        for (var j = 0; j < 9; j++) {
            document.getElementById("c" + i + j).value = matrix[i][j];
            document.getElementById("c" + i + j).readOnly = false;
        }
    }
}
