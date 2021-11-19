import Layout from "../../../components/Layout";
import { useRouter } from "next/router";

export default function Cliente(params) {
    const router = useRouter()
    return(
        <Layout title="Navegação Dinamica">
            <div>Filial = {router.query.filial}</div>
            <div>Código = {router.query.codigo}</div>
        </Layout>
    )
}