<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biarritz</title>
    <link rel="stylesheet" href="./estrutura.css">
</head>

<body>

    <div class="scene-1">
        <video autoplay loop>
            <source src="./assets/video/BIARRITZ_TELA INICIAL.mp4" type="video/mp4">
        </video>
        <div class="cabecalho"></div>
    </div>


    <!-- left buttons -->
    <div class="btn-conheca" onclick="location.href='../../../index.php'"></div>
    <div class="btn-estrutura" onclick="location.href='../estrutura/index.php'"></div>
    <div class="btn-apartamentos" onclick="location.href='../apartamentos/index.php'"></div>
    <div class="btn-localizacao" onclick="location.href='../localizacao/index.php'"></div>
    <div class="btn-imagens" onclick="location.href='../imagens/index.php'"></div>


    <!-- bottom buttons -->


    <div class="btn-voltar" onclick="history.back()"></div>

    <!-- ficha tecnica -->

    <div class="scene-2"></div>

    <div class="btn-left"></div>
    <div class="btn-right"></div>
    <div class="btn-implantacao" onclick="location.href='../imagens/implantacao.php'"></div>






    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const gallery = document.querySelector(".scene-2");
            let currentImageIndex = 1;

            function updateGallery() {
                const imagePath = `./galeria/${currentImageIndex}.jpg`; // Tenta jpg
                const alternativeImagePath = `./galeria/${currentImageIndex}.png`; // Tenta png


                const img = new Image();
                img.onload = function() {
                    gallery.style.backgroundImage = `url('${imagePath}')`;
                    gallery.style.backgroundSize = "cover";
                    gallery.style.backgroundRepeat = "no-repeat";
                };
                img.onerror = function() {
                    // Se não encontrar a imagem em formato jpg, tenta png
                    gallery.style.backgroundImage = `url('${alternativeImagePath}')`;
                    gallery.style.backgroundSize = "cover";
                    gallery.style.backgroundRepeat = "no-repeat";
                };
                img.src = imagePath;
            }

            function nextImage() {
                currentImageIndex = (currentImageIndex % 39) + 1;
                updateGallery();
            }

            function prevImage() {
                currentImageIndex = (currentImageIndex - 2 + 39) % 39 + 1;
                updateGallery();
            }

            const btnLeft = document.querySelector(".btn-left");
            const btnRight = document.querySelector(".btn-right");

            btnLeft.addEventListener("click", prevImage);
            btnRight.addEventListener("click", nextImage);

            updateGallery();
        });
    </script>
</body>

</html>