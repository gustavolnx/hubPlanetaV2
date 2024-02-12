function btnconheca(){
    location.href="../../conheca/index.html"
}


function btnestrutura(){
    location.href=""
}

function tec(){
    location.href="../tecnologia/index.html"
}

function susten(){
    location.href=""
}
function service(){
    location.href="../services/index.html"
}
function btnapartamento(){
    location.href="../../apartamento/planta/index.html"
}
function btnlocal(){
    location.href="../../local/index.html"
}

function btnimagem(){
    location.href="../../imagens/index.html"
}


var segundos = 0;
var timer = setInterval(testarInteracao, 1000); //1000 ms = 1 segundo

function testarInteracao(){
    segundos+= 1;
    
    if(segundos == 300){ //Limite máximo em Segundos
        window.location.href = "../../../../index.html";
    } 
    
  
}

$(document).on("click keydown keyup mousemove", function(){
    segundos = 0;
})

