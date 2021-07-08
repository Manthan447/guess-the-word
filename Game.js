var p1 = localStorage.getItem("name_1")
var p2 = localStorage.getItem("name_2")

var p1_score = 0;
var p2_score = 0;
var player_turn = "player_2"

document.getElementById("question_turn").innerHTML = "Question turn" + p1;
document.getElementById("answer_turn").innerHTML = "Answer turn" + p2;

function send(){
    get_word = document.getElementById("question").value;
    word = get_word.toLowerCase()

    charAt1 = word.charAt(1);

    length_divide2 = Math.floor(word.length/2)
    charAt2 = word.charAt(length_divide2)

    length_minus1 = word.length-1 ; 
    charAt3 = word.charAt(length_minus1);

    remove_charAT1 = word.replace(charAt1 , "_")
    remove_charAT2 = remove_charAT1.replace(charAt2 , "_")
    remove_charAT3 = remove_charAT2.replace(charAt3 , "_")

    word_question = "<h4> Q."+remove_charAT3+"</h4>"
    answer_input = "<br><input type = 'text' id = 'answer'>"
    check_button = "<br><br><button id= check onclick = 'Check_it()' class = btn btn-info>Check</button>"
    row = word_question + answer_input + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("question").value = "";
    document.getElementById("correct").innerHTML = "";
}

function Check_it(){
   Answer = document.getElementById("answer").value;
   if(get_word.toLowerCase() == Answer.toLowerCase()){
       document.getElementById("correct").innerHTML = "You are correct!!";
       if(player_turn == "player_2"){
           p2_score = p2_score + 1;
           document.getElementById("player2_score").innerHTML = p2_score;
       }
       else{
           p1_score = p1_score + 1;
           document.getElementById("player1_score").innerHTML = p1_score;
       }
   }
   else{
       document.getElementById("correct").innerHTML = "You are wrong";
   }
   if(player_turn == "player_2"){
     player_turn = "player_1"
     document.getElementById("question_turn").innerHTML = "Question turn" + p2;
     document.getElementById("answer_turn").innerHTML = "Answer turn" + p1;
}
else{
    player_turn = "player_2"
    document.getElementById("question_turn").innerHTML = "Question turn" + p1;
    document.getElementById("answer_turn").innerHTML = "Answer turn" + p2;
}
document.getElementById("output").innerHTML = "";
}