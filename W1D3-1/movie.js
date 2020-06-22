const favMovie = {
    title: "Interstellar",
    duration: 160,
    stars: ["Jack", " Henmry", "Kes"]
};

const movieInfo = (favMovie) => {
    console.log("Titel is: " + favMovie.title + ", Tijd is: " + favMovie.duration + ", Acteurs: " + favMovie.stars);
}
movieInfo(favMovie)