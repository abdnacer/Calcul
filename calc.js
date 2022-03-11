var ecran = document.getElementById('screen');
var numChar;
var currentChar, previousChar;
var operations = ['+', '-', '*', '/'];

function clearScreen(){
  ecran.value = "";
}

function show(num){
  ecran.value += num;
  numChar = ecran.value.length;
  currentChar = num;
  getPreviousChar(); 
}

function calculate(){
  ecran.value = eval(ecran.value);
}

function getPreviousChar(){
  previousChar = ecran.value.substring(numChar-2, numChar-1);
  calcSyntaxe();
}

function calcSyntaxe(){
  if(operations.includes(currentChar) && numChar == 1 && currentChar != '-'){
    removeChar();
  }

  if(operations.includes(previousChar) && operations.includes(currentChar)){
    if(previousChar == currentChar){
      removeChar();
    }
    else{
      overWrite();
    }
  }
}

function overWrite(){
  ecran.value = ecran.value.slice(0, numChar -2) + ecran.value.slice(numChar-1);
}

function removeChar(){
  ecran.value = ecran.value.substring(0, numChar-1);
}