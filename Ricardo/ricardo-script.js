document.getElementById("pedro-button").addEventListener("click", function() {
    // Cacher le bouton
    this.style.display = "none";

    // Afficher la vidéo et la jouer
    document.getElementById("video-container").style.display = "block";
    document.getElementById("video").play();
});

document.getElementById("video").addEventListener("ended", function() {
    // Cacher la vidéo
    document.getElementById("video-container").style.display = "none";

    // Afficher à nouveau le bouton
    document.getElementById("pedro-button").style.display = "block";
});

document.getElementById("video").addEventListener("volumechange", function() {
    console.log("Volume changed to: " + this.volume);
});
