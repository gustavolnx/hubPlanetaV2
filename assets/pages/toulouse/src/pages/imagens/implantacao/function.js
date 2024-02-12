function btnconheca(){
    location.href = "../../conheca/index.html";
}


function btnapartamento(){
    location.href="../../apartamento/planta/index.html"
}

function btnimagem(){
    location.href="../index.html"
}

function btnestrutura(){
    location.href="../../estrutura/sustentabilidade/index.html"
}

function btnlocal(){
    location.href="../../local/index.html"
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

