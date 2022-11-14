import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import { ReactElement } from "react"
import MainLayout from "../../src/components/layouts/MainLayout"
import { Pokemon } from "../../interfaces/pokemon.interface"
import { NextPageWithLayout } from "../_app"
import Image from "next/image"
import { Grid, Card, Text, Button, Container } from "@nextui-org/react"

interface Props {
    pokemon: Pokemon
}

const PokemonPage: NextPageWithLayout<Props> = ({ pokemon }) => {

    return (
        <Grid.Container css={{ marginTop: '5px' }} gap={2}>
            <Grid xs={12} sm={4} >
                <Card isHoverable css={{ padding: '30px' }}>
                    <Card.Body>
                        <Card.Image
                            src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                            alt={pokemon.name}
                            width="100%"
                            height={200}
                        />
                    </Card.Body>
                </Card>
            </Grid>

            <Grid xs={12} sm={8}>
                <Card>
                    <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Text h1 transform='capitalize'>{pokemon.name}</Text>

                        <Button
                            color="gradient"
                            ghost
                        >
                            Guardar en favoritos
                        </Button>
                    </Card.Header>

                    <Card.Body>
                        <Text size={30}>Sprites:</Text>

                        <Container direction='row' display='flex' gap={0}>
                            <Image
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon.sprites.back_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon.sprites.front_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon.sprites.back_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />

                        </Container>


                    </Card.Body>


                </Card>
            </Grid>

        </Grid.Container>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pathPokemons = [...Array(151)].map((value, index) => `${index + 1}`)
    return {
        paths: pathPokemons.map(id => ({ params: { id } })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const { id } = params as { id: string };
        const { data } = await axios.get<Pokemon>(` https://pokeapi.co/api/v2/pokemon/${id}`);
        return {
            props: {
                pokemon: data,
            }
        }
    } catch (error) {
        console.log(error);
        return {
            props: {
                pokemons: []
            }
        }
    }
}

PokemonPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout title="home">
            {page}
        </MainLayout>
    )
}

export default PokemonPage;