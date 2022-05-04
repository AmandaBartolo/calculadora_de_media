document.getElementById('botao').onclick = function (e) 
{
    var n1 = parseInt(document.querySelector("#n1").value);
    var n2 = parseInt(document.querySelector("#n2").value);
    var n3 = parseInt(document.querySelector("#n3").value);
    var n4 = parseInt(document.querySelector("#n4").value);
   
    var media = (n1 + n2 + n3 + n4) / 4;
    
    var resultado = media.toFixed(1);
    
    document.getElementById("resultado").innerHTML += "Sua média é: " + resultado
}