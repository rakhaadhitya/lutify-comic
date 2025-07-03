// Data komik dummy
const comics = [
    {
        title: "Boruto",
        image: "images/boruto.jpg",
        description: "Petualangan Boruto melanjutkan legasi Naruto",
        genre: "Action"
    },
    {
        title: "One Piece",
        image: "images/one_piece.jpeg",
        description: "Perburuan harta karun terbesar di dunia",
        genre: "Fantasy"
    },
    {
        title: "Komi-san",
        image: "images/komi.jpeg",
        description: "Komi yang pemalu berusaha membuat 100 teman",
        genre: "Comedy"
    },
    // Tambahkan data komik lainnya
];

// Fungsi filter genre
function filterByGenre(genre) {
    if(genre === "All") return comics;
    return comics.filter(comic => comic.genre === genre);
}

// Update fungsi render
function renderComics(filteredComics) {
    const container = document.getElementById('comics-container');
    container.innerHTML = '';
    
    const row = document.createElement('tr');
    const wrapperTd = document.createElement('td');
    wrapperTd.setAttribute('colspan', '6');
    
    filteredComics.forEach(comic => {
        const card = document.createElement('div');
        card.className = 'comic-card';
        card.innerHTML = `
            <img src="${comic.image}" alt="${comic.title}">
            <h3>${comic.title}</h3>
            <p>${comic.description}</p>
            <small>Genre: ${comic.genre}</small>
        `;
        wrapperTd.appendChild(card);
    });
    
    row.appendChild(wrapperTd);
    container.appendChild(row);
}


document.addEventListener('DOMContentLoaded', () => {

    renderComics(comics);
    
    document.querySelectorAll('.genre-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const genre = e.target.dataset.genre;
            renderComics(filterByGenre(genre));
        });
    });
});