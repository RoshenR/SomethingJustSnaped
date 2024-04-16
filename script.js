document.addEventListener('DOMContentLoaded', function() {
    var ricardoImage = document.querySelector('.portal-ricardo img');
    var snapSound = document.getElementById('snapSound');
    var snapGif = document.getElementById('snapGif');

    function playSoundAndShowGif() {
        document.querySelectorAll('body > *').forEach(function(el) {
            if (el.id !== 'snapSound' && el.id !== 'snapGif') {
                el.style.display = 'none';
            }
        });

        snapSound.play();

        setTimeout(function() {
            snapGif.style.display = 'block';
            snapGif.style.position = 'fixed';
            snapGif.style.top = '50%';
            snapGif.style.left = '50%';
            snapGif.style.transform = 'translate(-50%, -50%)';
            snapGif.style.zIndex = '1000';
            snapGif.style.height = '60vh';
            snapGif.style.width = '60vw';
        }, 600);

        setTimeout(function() {
            window.location.href = 'Ricardo/ricardo-index.html';
        }, 4000);
    }

    if (ricardoImage) {
        ricardoImage.addEventListener('click', playSoundAndShowGif);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var AhuImage = document.querySelector('.portal-ahu img'); //
    var snapSound = document.getElementById('snapSound');
    var snapGif = document.getElementById('snapGif');

    function playSoundAndShowGif() {
        document.querySelectorAll('body > *').forEach(function(el) {
            if (el.id !== 'snapSound' && el.id !== 'snapGif') {
                el.style.display = 'none';
            }
        });

        snapSound.play();

        setTimeout(function() {
            snapGif.style.display = 'block';
            snapGif.style.position = 'fixed';
            snapGif.style.top = '50%';
            snapGif.style.left = '50%';
            snapGif.style.transform = 'translate(-50%, -50%)';
            snapGif.style.zIndex = '1000';
            snapGif.style.height = '60vh';
            snapGif.style.width = '60vw';
        }, 600);

        setTimeout(function() {
            window.location.href = 'Ahu/ahu-index.html';
        }, 4000);
    }

    if (AhuImage) {
        AhuImage.addEventListener('click', playSoundAndShowGif);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var MathisImage = document.querySelector('.portal-mathis img');
    var snapSound = document.getElementById('snapSound');
    var snapGif = document.getElementById('snapGif');

    function playSoundAndShowGif() {
        document.querySelectorAll('body > *').forEach(function(el) {
            if (el.id !== 'snapSound' && el.id !== 'snapGif') {
                el.style.display = 'none';
            }
        });

        snapSound.play();

        setTimeout(function() {
            snapGif.style.display = 'block';
            snapGif.style.position = 'fixed';
            snapGif.style.top = '50%';
            snapGif.style.left = '50%';
            snapGif.style.transform = 'translate(-50%, -50%)';
            snapGif.style.zIndex = '1000';
            snapGif.style.height = '60vh';
            snapGif.style.width = '60vw';
        }, 600);

        setTimeout(function() {
            window.location.href = 'Mathis/mathis-index.html';
        }, 4000);
    }

    if (MathisImage) {
        MathisImage.addEventListener('click', playSoundAndShowGif);
    }
});


