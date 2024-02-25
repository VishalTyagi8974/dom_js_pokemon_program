const section = document.querySelector("section");
const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for (let i = 1; i <= 100; i++) {
    const newDiv = document.createElement("div")
    const image = document.createElement("img");
    newDiv.className = "pokediv";
    image.classList.add("pokeimg")

    image.src = `${baseUrl}${i}.png`;

    newDiv.appendChild(image);
    newDiv.append(`pokemon ${i}`);

    section.append(newDiv);
}



const h1 = document.createElement("h1")
h1.innerHTML = "<i> here are my pokemons</i>"

section.prepend(h1);


