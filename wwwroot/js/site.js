let films = [];

function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData(filmForm);
    let formObj = Object.fromEntries(formData);
    addFilm(formObj);
    filmForm.reset();
}

filmForm.addEventListener('submit', handleSubmit);

function init() {
    filmTableBody.innerHTML = ''; 

    for (const film of films) {
        filmTableBody.innerHTML += `
                    <tr>
                        <td>${film.name}</td>
                        <td>${film.description}</td>
                        <td>${film.category}</td>
                        <td>${film.rating}</td>
                        <td><img src="/img/${film.image}"></td>
                    </tr>
                `;
    }
}

function addFilm(film) {
    films.push(film);
    init(); 
}

init();