player1Name=localStorage.getItem("nomedojogador1");
player2Name=localStorage.getItem("nomedojogador2");
player1Score=0;
player2Score=0;
document.getElementById("player1Name").innerHTML=player1Name + " : ";
document.getElementById("player2Name").innerHTML=player2Name + " : ";
document.getElementById("player1Score").innerHTML=player1Score;
document.getElementById("player2Score").innerHTML=player2Score;
document.getElementById("playerQuestion").innerHTML="turno de pergunta - "+player1Name;
document.getElementById("playerAnswer").innerHTML="turno de resposta - "+player2Name;
function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();console.log(word);
    charAt1=word.charAt(1);removecharAt1=word.replace(charAt1,"_");console.log(removecharAt1);
    lenghtDivide2 = Math.floor(word.length/2);
     charAt2 = word.charAt(lenghtDivide2);
      console.log(charAt2);
       lenghtMinus1 = word.length - 1
       ; charAt3 = word.charAt(lenghtMinus1);
        console.log(charAt3);
        removeCharAt2 = removecharAt1.replace(charAt2, "_");
          removeCharAt3 = removeCharAt2.replace(charAt3, "_");
           console.log(removeCharAt3); questionWord = "<h4 id='wordDisplay'> P. "+removeCharAt3+"</h4>";
            input_box = "<br>Resposta : <input type='text' id='inputCheckBox'>";
             checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
              row = questionWord + input_box + checkButton ;
               document.getElementById("output").innerHTML = row;
                document.getElementById("word").value = "";

}
questionTurn = "player1";
answerTurn = "player2";
function check(){
  getanswer=document.getElementById("inputCheckBox").value;
  answer = getanswer.toLowerCase();
  if(answer == word){
    if (answerTurn == "player1"){
      player1Score= player1Score+1;
      document.getElementById("player1Score").innerHTML=player1Score;
    }
    else{player2Score = player2Score=1};
    document.getElementById("player2Score").innerHTML=player2Score;
  }
  if (questionTurn == "player1"){
    questionTurn="player2";
    document.getElementById("playerQuestion").innerHTML="turno de pergunta - "+player2Name;
  }
  else {
    questionTurn="player1";
    document.getElementById("playerQuestion").innerHTML="turno de pergunta - "+player1Name;
  }
  if(answerTurn == "player2"){
    answerTurn="player1";
    document.getElementById("playerAnswer").innerHTML="turno de resposta - "+player1Name;
  }
  else{
    answerTurn="player2"
    document.getElementById("playerAnswer").innerHTML="turno de resposta - "+player2Name;
  }
  document.getElementById("output").innerHTML="";
}