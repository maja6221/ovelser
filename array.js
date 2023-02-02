const playliste = ["Doja", "Under din sne", "Lift me up", "Flowers", "Rechazame", "Players", "Cannelloni og kød", "Sunroof", "Brazil", "Passager"];

const liste = document.querySelector("ul");


playliste.forEach(lavPlayliste);


function lavPlayliste(playliste) {
    liste.innerHTML += "<li>" + playliste + "</li>";
}