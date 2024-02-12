document.addEventListener("DOMContentLoaded", function () {
  const scene1 = document.querySelector(".scene-1");
  const scene2 = document.querySelector(".scene-2");
  const scene3 = document.querySelector(".scene-3");
  const btnSustentabilidade = document.querySelector(".btn-sustentabilidade");
  const btnSustentabilidade2 = document.querySelector(
    ".btn-sustentabilidade-2"
  );
  const btnTecnologia = document.querySelector(".btn-tecnologia");
  const btnTecnologia2 = document.querySelector(".btn-tecnologia-2");
  const btnBtz = document.querySelector(".btn-btz");
  const btnBtz2 = document.querySelector(".btn-btz-2");

  btnTecnologia.addEventListener("click", function () {
    scene2.style.opacity = 1;
    btnTecnologia.style.display = "none";
    btnTecnologia2.style.display = "block";
    btnSustentabilidade.style.display = "none";
    btnSustentabilidade2.style.display = "block";
    btnBtz.style.display = "block";
    btnBtz2.style.display = "none";
    scene3.style.opacity = 0;
  });

  btnTecnologia2.addEventListener("click", function () {
    scene2.style.opacity = 1;
    scene3.style.opacity = 0;
    btnTecnologia.style.display = "none";
    btnTecnologia2.style.display = "block";
    btnSustentabilidade.style.display = "none";
    btnSustentabilidade2.style.display = "block";
    btnBtz.style.display = "block";
    btnBtz2.style.display = "none";
  });

  btnSustentabilidade2.addEventListener("click", function () {
    scene2.style.opacity = 0;
    btnTecnologia.style.display = "block";
    btnTecnologia2.style.display = "none";
    btnSustentabilidade.style.display = "block";
    btnSustentabilidade2.style.display = "none";
    btnBtz.style.display = "block";
    scene3.style.opacity = 0;
    btnBtz2.style.display = "none";
    btnBtz.style.display = "block";
  });

  btnSustentabilidade.addEventListener("click", function () {
    scene2.style.opacity = 0;
    btnTecnologia.style.display = "block";
    btnTecnologia2.style.display = "none";
    btnSustentabilidade.style.display = "block";
    btnSustentabilidade2.style.display = "none";
    btnBtz.style.display = "block";
    scene3.style.opacity = 0;
  });

  btnBtz.addEventListener("click", function () {
    scene3.style.opacity = 1;
    scene2.style.opacity = 0;
    btnTecnologia.style.display = "block";
    btnTecnologia2.style.display = "none";
    btnSustentabilidade.style.display = "none";
    btnSustentabilidade2.style.display = "block";
    btnBtz.style.display = "none";
    btnBtz2.style.display = "block";
  });
});
