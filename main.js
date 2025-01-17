let gifsContainer = document.querySelector('.js-gifs-container');
let form = document.querySelector('.js-gifs-form');
let gifsInput = document.querySelector('[name=gifs-name]');


function fetchGifs(gifsName) {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=ieXVx0OK5eZYn1qCdSjzenB0mcgbp5Vt&q=${gifsName}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
        .then(response => response.json())
        .then(data => {
            let gifsHTML = data.data
                .map(gif => `
                        <img src="${gif.images.fixed_height.url}" alt="${gif.title}">
                `)
            .join('') + '</ul>';
        gifsContainer.innerHTML = `<ul>${gifsHTML}</ul>`;
    })
    .catch(err => {
        console.warn(err);
        gifsContainer.innerHTML = '<p>Error fetching gifs</p>';
    });
}


function formSubmitted(event) {
    event.preventDefault();
    let gifsName = gifsInput.value.trim();
    fetchGifs(gifsName);
}


form.addEventListener('submit', formSubmitted);