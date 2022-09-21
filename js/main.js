let elPokemons = $_(".pokemons");

pokemons.forEach((pokemon) => {
  let newPokemonItem = createElement("li", "pokemon-item");
  let newPokemonImg = createElement("img", "pokemon-img");
  let newPokemonName = createElement("h4", "text-center", pokemon.name);
  let newPokemonType = createElement("p", "text-center", pokemon.type.join(", "));  

  newPokemonImg.src = pokemon.img;
  newPokemonImg.alt = pokemon.name;

  newPokemonItem.appendChild(newPokemonImg);
  newPokemonItem.appendChild(newPokemonName);
  newPokemonItem.appendChild(newPokemonType);
  
  elPokemons.appendChild(newPokemonItem)
});