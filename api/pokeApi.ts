import axios from "axios";


const pokeApi = axios.create({
    baseUrl: "https://pokeapi.co/api/v2"
})

export default pokeApi