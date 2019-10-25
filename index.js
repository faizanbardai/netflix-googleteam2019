window.onload = populateMovies

function populateMovies() {
    getMovies(render);
};

function getMovies(callback, options) {
    setTimeout(function () {
        var movies = MOVIES;
        if (options && options.category) {
            movies = movies.filter(function (movie) {
                return (movie.category === options.category)
            });
        };
        if (options && options.text) {
            movies = movies.filter(function (movie) {
                return (movie.title === options.text);
            })
        };
        callback(movies);
    }, 800);
};

function render(movies) {
    var contentDiv = document.getElementById('movie-content');
    var spinner = document.getElementById('spinner');
    spinner.classList.remove('d-flex');
    spinner.classList.add('d-none');

    movies.forEach(function (item) {
        var card = buildCard(item);
        contentDiv.appendChild(card);
    });
};

function buildCard(data) {
    // <img class="col-12 col-sm-4 col-lg-3 my-3" src="./movies/1-2.jpg" alt="movie">
    var img = document.createElement('img');
    img.className = 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-3';
    img.alt = 'movie';
    img.src = './img/' + data.img + '.jpg';
    return img;
};

function textSearch(event) {
    if (event.keyCode == 13) {
        emptyMoviesContent();
        getMovies(render, { text: event.target.value });
    };
};

function handleHeaderClick(event) {
    selectSection(event.target)
    emptyMoviesContent()
    switch (event.target.innerText) {
        case 'TV Series':
            getMovies(render, { category: 'series' });
            break;
        case 'Movies':
            getMovies(render, { category: 'movie' });
            break;
        case 'Children':
            getMovies(render, { category: 'children' });
            break;
        default:
            getMovies(render);
            break;
    };
};

function emptyMoviesContent() {
    var contentDiv = document.getElementById('movie-content');
    var movies = contentDiv.getElementsByTagName('img');
    while (movies.length) {
        movies[0].remove();
    }
    var spinner = document.getElementById('spinner')
    spinner.classList.remove('d-none');
    spinner.classList.add('d-flex');
};

var MOVIES = [
    {
        title: 'the office - season six',
        category: 'series',
        img: '1-1'
    },
    {
        title: 'the terror - season 1',
        category: 'series',
        img: '1-2'
    },
    {
        title: 'jack ryan',
        category: 'movie',
        img: '1-3'
    },
    {
        title: 'the matrix',
        category: 'movie',
        img: '1-4'
    },
    {
        title: 'the man in the high castle',
        category: 'movie',
        img: '2-1'
    },
    {
        title: 'desesperate housewives',
        category: 'movie',
        img: '2-2'
    },
    {
        title: 'indiana jones and the riders of the lost ark',
        category: 'movie',
        img: '2-3'
    },
    {
        title: 'jaws',
        category: 'movie',
        img: '2-4'
    },
    {
        title: 'dottor house - season 1',
        category: 'series',
        img: '3-1'
    },
    {
        title: 'shrek',
        category: 'children',
        img: '3-2'
    },
    {
        title: 'despicable me 2',
        category: 'children',
        img: '3-3'
    },
    {
        title: 'vikings',
        category: 'movie',
        img: '3-4'
    }
];