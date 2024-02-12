


//Botoes Laterais
function btnbia(){
    location.href = "../conheca/index.html";
    }

    function btnestru(){
        location.href = "../estrutura/inicio/index.html";
    }
    function btnap() {
        location.href = "";
    }


    function btnlocal(){
        location.href = "";
    }

//Botoes Inferiores

function implanta(){
    location.href = "implantacao/index.html"
}

var segundos = 0;
var timer = setInterval(testarInteracao, 1000); //1000 ms = 1 segundo

function testarInteracao(){
    segundos+= 1;
    
    if(segundos == 300){ //Limite máximo em Segundos
        window.location.href = "../../index.html";
    } 
    
  
}

$(document).on("click keydown keyup mousemove", function(){
    segundos = 0;
})