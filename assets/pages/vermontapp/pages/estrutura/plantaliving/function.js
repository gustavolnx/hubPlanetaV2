function btnconhaca(){
    location.href = "../../conheca/index.html";
}

function susten(){
    location.href = "../inicio/index.html";
}

function tec(){
    location.href = "../tecnologia/index.html";
}

function dife(){
    location.href = "../facilites/index.html";
}
function btnestrutura(){
    location.href=""
}

function plantapa(){
    location.href=""
}

function btnimagens(){
    location.href="../../imagens/index.html"
}
function CarregaImagens(divDestino, data) {

    var imagens = data.attr('imagens').split(",");
    var html = "";
    for (i = 0; i < imagens.length; i++) {
        html = html + "<img  id='teste' src='" + imagens[0] + "' width='100%'" + "'  height='100%''/>";
    }

    divDestino.html(html)
}

function funcao_a() {

    setTimeout(function ()
    {   
        element2.style.webkitTransitionDuration = "1.3s";
        element2.style.webkitTransitionTimingFunction = "ease-out";
        element2.style.transform = " translateX(-200px)  scale(0.8)";
        

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

var element = document.getElementById("manipula");

var element1 = document.getElementById("planta");

var element2 = document.getElementById("imgplan");




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
        window.location.href = "../../../index.html";
    } 
    
  
}

$(document).on("click keydown keyup mousemove", function(){
    segundos = 0;
})

function impar(){
    location.href=""
}


function par(){
    location.href="../plantapar/index.html"
}

