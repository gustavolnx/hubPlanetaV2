function btnconhaca() {
  location.href = "../../conheca/index.html";
}

function susten() {
  location.href = "../inicio/index.html";
}

function tec() {
  location.href = "../tecnologia/index.html";
}

function dife() {
  location.href = "";
}

function plantapa() {
  location.href = "../plantaliving/index.html";
}
function btnestrutura() {
  location.href = "";
}
function btnimagens() {
  location.href = "../../imagens/index.html";
}

function CarregaImagens(divDestino, data) {
  var imagens = data.attr("imagens");
  var imagens = imagens.split(",");
  var html = "";
  for (i = 0; i < imagens.length; i++) {
    html =
      html +
      "<img  id='teste' src='" +
      imagens[0] +
      "' width='100%'" +
      "'  height='100%''/>";
  }

  divDestino.html(html);
}

var segundos = 0;
var timer = setInterval(testarInteracao, 1000); //1000 ms = 1 segundo

function testarInteracao() {
  segundos += 1;

  if (segundos == 300) {
    //Limite máximo em Segundos
    window.location.href = "../../../index.html";
  }
}

$(document).on("click keydown keyup mousemove", function () {
  segundos = 0;
});
