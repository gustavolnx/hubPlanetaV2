document.addEventListener("DOMContentLoaded", function () {
  // Get references to the relevant elements
  const btnFicha = document.querySelector(".btn-ficha");
  const btnFicha2 = document.querySelector(".btn-ficha-2");
  const scene2 = document.querySelector(".scene-2");
  const scene3 = document.querySelector(".scene-3");
  const btnConceito = document.querySelector(".btn-conceito");
  const btnConceito2 = document.querySelector(".btn-conceito-2");
  const btnArquitetura = document.querySelector(".btn-arquitetura");
  const btnArquitetura2 = document.querySelector(".btn-arquitetura-2");
  const btnBeneficios = document.querySelector(".btn-beneficios");
  const btnBeneficios2 = document.querySelector(".btn-beneficios-2");
  const scene4 = document.querySelector(".scene-4");

  btnFicha.addEventListener("click", function () {
    scene2.style.opacity = 1;
    btnFicha.style.display = "none";
    btnFicha2.style.display = "block";
    btnConceito.style.display = "none";
    btnConceito2.style.display = "block";
    btnArquitetura2.style.display = "none";
    btnArquitetura.style.display = "block";
    scene3.style.opacity = 0;
    btnBeneficios.style.display = "block";
    btnBeneficios2.style.display = "none";
    scene4.style.opacity = 0;
  });

  btnFicha2.addEventListener("click", function () {
    scene2.style.opacity = 1;
    scene3.style.opacity = 0;
    btnFicha.style.display = "none";
    btnFicha2.style.display = "block";
    btnConceito.style.display = "none";
    btnConceito2.style.display = "block";
    btnArquitetura2.style.display = "none";
    btnArquitetura.style.display = "block";
    btnArquitetura2.style.display = "none";
  });

  btnConceito2.addEventListener("click", function () {
    scene2.style.opacity = 0;
    btnFicha.style.display = "block";
    btnFicha2.style.display = "none";
    btnConceito.style.display = "block";
    btnConceito2.style.display = "none";
    btnArquitetura2.style.display = "none";
    scene3.style.opacity = 0;
    btnArquitetura.style.display = "block";
    btnBeneficios.style.display = "block";
    btnBeneficios2.style.display = "none";
    scene4.style.opacity = 0;
  });

  btnArquitetura.addEventListener("click", function () {
    scene3.style.opacity = 1;
    btnArquitetura.style.display = "none";
    btnArquitetura2.style.display = "block";
    btnFicha.style.display = "block";
    btnConceito2.style.display = "block";
    btnFicha2.style.display = "none";
    btnFicha.style.display = "block";
    btnBeneficios.style.display = "block";
    btnBeneficios2.style.display = "none";
    scene4.style.opacity = 0;
  });

  btnBeneficios.addEventListener("click", function () {
    scene4.style.opacity = 1;
    btnBeneficios.style.display = "none";
    btnBeneficios2.style.display = "block";
    btnConceito.style.display = "none";
    btnConceito2.style.display = "block";
    btnArquitetura2.style.display = "none";
    btnArquitetura.style.display = "block";
    btnFicha.style.display = "block";
    btnFicha2.style.display = "none";
    scene2.style.opacity = 0;
    scene3.style.opacity = 0;
  });
});
