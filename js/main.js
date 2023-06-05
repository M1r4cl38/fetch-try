const pDOM = document.querySelector('p');

const data = fetch('https://m1r4cl38.github.io/fetch-try//data/services.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (const icon of data) {
            console.log(icon);
        }
    });