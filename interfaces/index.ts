export interface mainInterface {
    children: React.ReactElement | React.ReactNode;
    title: string;
}

export interface PokemonListResponse {
    count: number;
    next: string;
    previous: string;
    results: SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url: string;
    id: number;
    img: string;
}

export interface HomePageProps {
    pokemons: SmallPokemon[];
} 