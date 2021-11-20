import Layout from "../components/Layout";

/* export function getStaticProps() {
    return (
        {
            props: {
                numero: Math.random()
            }
        }
    )
} */

export function getServerSideProps() {
    return (
        {
            props: {
                numero: Math.random()
            }
        }
    )
}

export default function Estatico(props) {
    return (
        <Layout title="Conteudo estatico">
            <div>
                {props.numero}
            </div>
        </Layout>
    )

}