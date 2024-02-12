function btnconheca(){
    location.href=""
}

function conceito(){
    location.href="../index.html"
}

function ficha(){
    location.href="../ficha/index.html"
}
function arqui(){
    location.href="../arquitetura/index.html"
}
function beneficio(){
    location.href=""
}
function btnestrutura(){
    location.href="../../estrutura/sustentabilidade/index.html"
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

