
var min=7;
var max=14;

//let codeascii=cadena.charCodeAt(0)
//document.write(codeascii);


var cifrarac=document.getElementById('cifrado');
cifrarac.addEventListener("click",cifrar);

function cifrar (){
  var cadena=document.getElementById('caja').value;
  if (cadena=="") {
    alert("ingrear unas letras")
  } else {
   
      var numale=min+Math.floor(Math.random()*max);
  
  var impresion="";
  document.getElementById('cajacifrada').value=numale;
  
  
  var tam=cadena.length;
  
  for (var i = 0; i < tam; i++) {
  let charascii=cadena.charCodeAt(i);
  var final=charascii+numale;
  var cadenaascii=String.fromCharCode(final);
  impresion=impresion + cadenaascii ;
  document.getElementById('caja').value=impresion;
 
}


  }
 
}
var decifrarac=document.getElementById('decifrarr');
decifrarac.addEventListener("click",decifrar);


function decifrar(){
  var deci=document.getElementById('cajacifrada').value;
  if (deci=="") {
    alert("ingresa un nivel de cifrado");
  } else {
      var impresion="";
  
      var cadena=document.getElementById('caja').value;
  
  var tam=cadena.length;
  for (var i = 0; i < tam; i++) {
    var charascii=cadena.charCodeAt(i);
  var final=charascii-deci;
  var cadenaascii=String.fromCharCode(final);
  impresion=impresion + cadenaascii;

}
document.getElementById('caja').value=impresion;
  }

}

    

//for (var i = 0; i <=100; i++) {
//let numale=Math.floor(min + Math.random()*max);
//document.write(numale + "<br>")
  //document.write(Math.floor(Math.random()) + "<br>");
//8}
  
