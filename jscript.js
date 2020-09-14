// const key = '04c35731a5ee918f014970082a0088b';
const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const picPath = 'https://image.tmdb.org/t/p/w1280';
const searchApi =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.querySelector('main');
const form = document.querySelector('form');
const search = document.querySelector('search');

getMovies();

async function getMovies() {
    const response = await fetch(url);
    const responseData = await response.json();

    console.log(responseData);

    // responseData.results.forEach(movie => {
    //     const img = document.createElement('img');
    //     img.src = picPath + movie.poster_path;

    //     document.body.appendChild(img);
    // });

    responseData.results.forEach((movie) => {

        const { poster_path, title, vote_average, overview } = movie;

        const movieBox = document.createElement('div');
        movieBox.classList.add('movie');

        movieBox.innerHTML = `
        <div class="movie">
            <div class="img-box">
                <img src="${picPath + poster_path}" alt="${title}" />
            </div>
            <div class="movie-info">
                <h3>${title}</h3>
                <p class="${getClassByRate(vote_average)}">IMDb - ${vote_average}</p>
            </div>
            
        </div>
        `;
        main.appendChild(movieBox);
    });

    return responseData;
}

function getClassByRate(vote) {
    if(vote >= 7.5) {
        return 'green';
    }
    else if(vote >= 5) {
        return 'orange';
    }
    else {
        return 'red';
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchItem = search.value;
});