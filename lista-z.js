document.addEventListener("DOMContentLoaded", () => {
    const comicData = [
        { judul: "Boruto", gambar: "images/boruto.jpg" },
        { judul: "One Piece", gambar: "images/one_piece.jpeg" },
        { judul: "Naruto", gambar: "images/naruto.jpg" },
        { judul: "Attack on Titan", gambar: "images/aot.jpg" },
        { judul: "Dragon Ball", gambar: "images/dragon_ball.jpeg" },
        { judul: "Chainsaw Man", gambar: "images/chainsaw_man.jpeg" },
        // Tambahkan lebih banyak komik di sini
    ];

    const table = document.getElementById("comic-list");

    function tampilkanKomik(data) {
        table.innerHTML = ""; // bersihkan dulu
        let row;

        data.forEach((komik, index) => {
            if (index % 6 === 0) {
                row = document.createElement("tr");
                table.appendChild(row);
            }

            const cell = document.createElement("th");
            cell.innerHTML = `
                <img src="${komik.gambar}" /><br>
                <span class="comic-title">${komik.judul}</span>
            `;
            row.appendChild(cell);
        });
    }

    // Tampilkan semua komik pertama kali
    tampilkanKomik(comicData);

    // Filter A-Z
    const filterButtons = document.querySelectorAll("#filter-buttons button");
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const huruf = button.textContent.toLowerCase();

            filterButtons.forEach(btn => btn.classList.remove("active-button"));
            button.classList.add("active-button");

            let hasil;

            if (huruf === "0-9") {
                hasil = comicData.filter(komik => /^[0-9]/.test(komik.judul));
            } else if (huruf === "#") {
                hasil = comicData.filter(komik => /^[^a-z0-9]/i.test(komik.judul));
            } else {
                hasil = comicData.filter(komik => komik.judul.toLowerCase().startsWith(huruf));
            }

            tampilkanKomik(hasil);
        });
    });
});
