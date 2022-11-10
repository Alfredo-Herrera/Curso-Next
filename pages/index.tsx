import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import { ReactElement } from "react";
import MainLayout from "../src/components/layouts/MainLayout";
import { NextPageWithLayout } from "./_app";
import { GetStaticProps } from 'next'
import axios from 'axios';
import { HomePageProps, PokemonListResponse, SmallPokemon } from "../interfaces";


const HomePage: NextPageWithLayout<HomePageProps> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map(({ id, name, img }) => (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
          <Card isHoverable isPressable>
            <Card.Body css={{ p: 1 }}>
              <Card.Image src={img} width="100%" height={140} />
            </Card.Body>
            <Card.Footer>
              <Row justify="space-between">
                <Text transform="capitalize">{name}</Text>
                <Text># {id}</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const { data } = await axios.get<PokemonListResponse>(' https://pokeapi.co/api/v2/pokemon?limit=151');
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
    const pokemons: SmallPokemon[] = data?.results.map((poke, i) => ({ ...poke, id: i + 1, img: `${url}${i + 1}.svg` }))
    return {
      props: {
        pokemons,
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

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout title="home">
      {page}
    </MainLayout>
  )
}

export default HomePage;


// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg