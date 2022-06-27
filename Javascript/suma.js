mi bb
var button=document.getElementById('botonsum');
button.addEventListener("click",suma);
function suma(){
let textnum1=document.getElementById('textnum1').value;
let textnum2=document.getElementById('textnum2').value;
  let resultado=parseInt(textnum1) + parseInt(textnum2) ;
  document.getElementById('caja').value=resultado;
 
}

var buttonres=document.getElementById('botonres');
buttonres.addEventListener("click",resta);

function resta(){
let textnum1=document.getElementById('textnum1').value;
let textnum2=document.getElementById('textnum2').value;
  let resultado=textnum1-textnum2;
  document.getElementById('caja').value=resultado;
}


var buttonmul=document.getElementById('botonmul');
buttonmul.addEventListener("click",multi);

function multi(){
  var textnum1=document.getElementById('textnum1').value;
var textnum2=document.getElementById('textnum2').value;
  let resultado=textnum1*textnum2;
  document.getElementById('caja').value=resultado;
}


var buttondiv=document.getElementById('botondiv');
buttondiv.addEventListener("click",div);
  
  
function div(){
  var textnum1=document.getElementById('textnum1').value;
var textnum2=document.getElementById('textnum2').value;
  let resultado=textnum1/textnum2;
  
  document.getElementById('caja').value=resultado;
}
