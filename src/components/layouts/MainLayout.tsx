import { FC } from "react"
import Head from 'next/head';
import React from 'react'
import { mainInterface } from "../../../interfaces";
import Navbar from "../../components/ui/Navbar/Navbar";

const MainLayout: FC<mainInterface> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="Alfredo Herrera" />
                <meta name="description" content="informacion sobre el pokemon" />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
            </Head>

            <Navbar />

            <main style={{ padding: "0px 20px" }}>
                {children}
            </main>
        </>
    )
}

export default MainLayout;