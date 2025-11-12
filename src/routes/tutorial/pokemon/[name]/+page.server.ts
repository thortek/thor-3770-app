export async function load({ params }) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
	const retrievedPokemon = await response.json()

	//console.log(pokemon);
	return {
		pokemon: {
			name: retrievedPokemon.name,
			id: retrievedPokemon.id,
			image: retrievedPokemon.sprites.other['official-artwork'].front_default
		}
	}
}
