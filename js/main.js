
 /*
  var nome = "Mabel Kruger de Souza";
  var idade1 = 17;
  var idade2 = 28;
  var frase = "Hoje o dia ta cansativo";
  //alert("Seja bem-vindx " + nome + " :)");

  console.log(nome);
  console.log(idade + idade2);
  console.log(frase.toUpperCase());
  //alert(frase.replace("cansativo", "bonito"));

 */ 
//-------------------------------------------------------

 var lista =["Maçã", "Pera", "Uva"];
 lista.push("Laranja");
 lista.pop("Maçã");
 console.log(lista.toString()); 
 console.log(lista.join(" - "));

//-------------------------------------------------------

 var listaDicionario = [{name:"passion fruit", color:"Yellow"}, {name:"Apple", color:"Red"}, {name:"Lemon", color:"Green"}];
 var dicionario = {name:"Maracuja", color:"Yellow"};

 console.log(dicionario);
 console.log(listaDicionario);

//------------------------------------------------------
/*
var idade = prompt("Qual a sua idade?")
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}

*/ 

//------------------------------------------------------

 var count = 0;
 while(count <= 5 ){
    console.log(count);
    count++;
 }

//----------------------------------------------------

var count2;
for(count2=1; count2 <= 5; count2++){
    //alert(count2);
}

//----------------------------------------------------

var date = new Date();
//alert(date.getDay());
//alert(date.getMonth()+1);
//alert(date.getHours());
//alert(date.getMinutes());
//alert(date.getSeconds());

//---------------------------------------------------

function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5,10));