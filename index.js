window.onload = populateMovies

function populateMovies() {
    getMovies(render);
};

function getMovies(callback, options) {
    setTimeout(function () {
        var movies = MOVIES;
        if (options && options.genre) {
            movies = movies.filter(function (movie) {
                debugger
                return (movie.genre.includes(options.genre));
                // return (movie.genre === options.genre);
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
        case 'Talk-Show':
            getMovies(render, { genre: 'talk-show' });
            break;
        case 'Adventure':
            getMovies(render, { genre: 'adventure' });
            break;
        case 'Drama':
            getMovies(render, { genre: 'drama' });
            break;
        case 'History':
            getMovies(render, { genre: 'history' });
            break;
        case 'Horror':
            getMovies(render, { genre: 'horror' });
            break;
        case 'Thriller':
            getMovies(render, { genre: 'thriller' });
            break;
        case 'Action':
            getMovies(render, { genre: 'action' });
            break;
        case 'Sci-Fi':
            getMovies(render, { genre: 'sci-fi' });
            break;
        case 'Comedy':
            getMovies(render, { genre: 'comedy' });
            break;
        case 'Mystery':
            getMovies(render, { genre: 'mystery' });
            break;
        case 'Reality-TV':
            getMovies(render, { genre: 'reality-tv' });
            break;
        case 'Animation':
            getMovies(render, { genre: 'animation' });
            break;
        default:
            getMovies(render);
            break;
    };
};

function selectSection(element) {
    var sections = document.getElementsByClassName('nav-item');
    var listItem = element.parentElement;
    for (var section of sections) {
        section.classList.remove('active');
    };
    listItem.classList.add('active');
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
        img: '1-1',
        genre: ['comedy','talk-show']
    },
    {
        title: 'the terror - season 1',
        category: 'series',
        img: '1-2',
        genre: ['adventure', 'drama', 'history']
    },
    {
        title: 'jack ryan',
        category: 'movie',
        img: '1-3',
        genre: ['action', 'drama', 'thriller']
    },
    {
        title: 'the matrix',
        category: 'movie',
        img: '1-4',
        genre: ['action', 'sci-fi']
    },
    {
        title: 'the man in the high castle',
        category: 'movie',
        img: '2-1',
        genre: ['drama', 'sci-fi', 'thriller']
    },
    {
        title: 'desesperate housewives',
        category: 'movie',
        img: '2-2',
        genre: ['comedy', 'drama', 'mystery']
    },
    {
        title: 'indiana jones and the riders of the lost ark',
        category: 'movie',
        img: '2-3',
        genre: ['action', 'adventure']
    },
    {
        title: 'jaws',
        category: 'movie',
        img: '2-4',
        genre: ['adventure', 'drama', 'thriller']
    },
    {
        title: 'dottor house - season 1',
        category: 'series',
        img: '3-1',
        genre: ['drama', 'mystery',]
    },
    {
        title: 'shrek',
        category: 'children',
        img: '3-2',
        genre: ['animation', 'adventure', 'comedy']
    },
    {
        title: 'despicable me 2',
        category: 'children',
        img: '3-3',
        genre: ['animation', 'adventure', 'comedy']
    },
    {
        title: 'vikings',
        category: 'movie',
        img: '3-4',
        genre: ['action', 'adventure', 'drama']
    }
];