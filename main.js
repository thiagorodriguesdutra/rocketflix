const $container = document.querySelector('main');
const $image = document.querySelector('.img-movie');
const $title = document.querySelector('.title-movie');
const $overview = document.querySelector('.overview-movie');
const $defaultImg = document.querySelector('.response-404')

function randomMovies() {
    $container.classList.remove("api-response")
    const id = Math.floor(Math.random() * (1000 - 1) + 1);
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0eb2900a7ac75735bf3c90273a76eec0&query=whiplash&language=pt-BR&region=BR`)
    .then((res) => res.json())
    .then((data) => {
        if (data.success === false) {
            $container.classList.add("api-response");
            $image.src = "/assets/Poster.png";
            $title.innerHTML = "Ops, hoje não é dia de assistir filme. Bora codar! 🚀";
            $overview.innerHTML = "";
        } else {
            $container.classList.add("api-response");
            $image.src = `https://image.tmdb.org/t/p/w200${data.poster_path}`;
            $title.innerHTML = data.title;
            $overview.innerHTML = data.overview;
        }
    })
    .catch((e) => {
       console.log(e)
    }) 
};




