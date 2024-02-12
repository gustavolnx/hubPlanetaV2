

var element = document.getElementById("manipula");

var element1 = document.getElementById("planta");

var element2 = document.getElementById("imgplan");


function btnconheca(){
    location.href="../../conheca/index.html"
}


function btnestrutura(){
    location.href="../../estrutura/sustentabilidade/index.html"
}


function btnapartamento(){
    location.href=""
}
function dife(){
    location.href="../diferencial/index.html"
}
function perso(){
    location.href="../personaliza/index.html"
}
function btnlocal(){
    location.href="../../local/index.html"
}

function btnimagem(){
    location.href="../../imagens/index.html"
}

function funcao_a() {

    setTimeout(function ()
    {   
        element2.style.webkitTransitionDuration = "1.3s";
        element2.style.webkitTransitionTimingFunction = "ease-out";
        element2.style.transform = " translateX(-200px)  scale(0.6)";
        

    }, 0);

    document.getElementById("imagens1").style.display = "block";
}

function CarregaImagens(divDestino, data) {

    var imagens = data.attr('imagens').split(",");
    var html = "";
    for (i = 0; i < imagens.length; i++) {
        html = html + "<img  id='teste' src='" + imagens[0] + "' width='100%'" + "'  height='100%''/>";
    }

    divDestino.html(html)
}



function clickimg(){
    setTimeout(function ()
    {   
        element2.style.webkitTransitionDuration = "1.3s";
        element2.style.webkitTransitionTimingFunction = "ease-out";
        element2.style.webkitTransform = "scale(1)";
       
    }, 0);

   
    document.getElementById("imagens1").style.display = "none";
   
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

