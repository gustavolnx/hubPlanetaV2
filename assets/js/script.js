document.addEventListener("DOMContentLoaded", function () {
  var btnToulouse = document.querySelector(".btn-toulouse");
  if (btnToulouse) {
    btnToulouse.addEventListener("click", function () {
      window.location.href = "../hubPlaneta/assets/pages/toulouse/";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var btnVermont = document.querySelector(".btn-vermont");
  if (btnVermont) {
    btnVermont.addEventListener("click", function () {
      window.location.href = "../hubPlaneta/assets/pages/vermontapp/";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var btnVermont = document.querySelector(".btn-biarritz");
  if (btnVermont) {
    btnVermont.addEventListener("click", function () {
      window.location.href = "../hubPlaneta/assets/pages/biarritz/";
    });
  }
});
