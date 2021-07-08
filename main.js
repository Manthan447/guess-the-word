var name1 = ""
var name2 = ""

function Start(){
 name1 = document.getElementById("player1").value;
 name2 = document.getElementById("player2").value;
 localStorage.setItem("name_1" , name1);
 localStorage.setItem("name_2" , name2);
 window.location = "Game.html";
}
