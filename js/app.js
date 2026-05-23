fetch("http://localhost:8080/movies")

.then(response => response.json())

.then(data => {

    const container =
        document.getElementById("movie-container");

    data.forEach(movie => {

        const card =
            document.createElement("div");

        card.classList.add("movie-card");

        card.innerHTML = `

            <img src="${movie.imageUrl}"
                 alt="${movie.title}">

            <div class="movie-info">

                <h3>${movie.title}</h3>

                <p>⭐ ${movie.rating}</p>

                <p>Release: ${movie.releaseYear}</p>

                <p>${movie.description}</p>

            </div>
        `;

        container.appendChild(card);
    });

});

const banners = [

{
    title: "Money Heist",
    desc: "Spanish crime thriller with intense action.",
    image: "https://image.tmdb.org/t/p/original/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg"
},

{
    title: "Interstellar",
    desc: "Epic space exploration journey.",
    image: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
},

{
    title: "Avengers Endgame",
    desc: "Marvel heroes unite for final battle.",
    image: "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
},

{
    title: "John Wick",
    desc: "Legendary assassin returns.",
    image: "https://image.tmdb.org/t/p/w1000_and_h563_face/c7hZjG4Q6j6VeM2sXHpWIO2CZkd.jpg"
}

];

let currentBanner = 0;

const hero = document.querySelector(".hero");
const bannerTitle = document.getElementById("banner-title");
const bannerDesc = document.getElementById("banner-desc");

function changeBanner() {

    hero.style.backgroundImage =
    `url(${banners[currentBanner].image})`;

    bannerTitle.textContent =
    banners[currentBanner].title;

    bannerDesc.textContent =
    banners[currentBanner].desc;

    currentBanner++;

    if(currentBanner >= banners.length) {
        currentBanner = 0;
    }
}

changeBanner();

setInterval(changeBanner, 4000);