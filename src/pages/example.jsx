import { Fragment } from "react";
import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Example() {
    
    return (
        <Layout title="Usando componentes">
            <Cabecalho title="React"/>
            <Cabecalho title="Next"/>
        </Layout>

    )

}