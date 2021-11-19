import Layout from '../../components/Layout'
import Carrinho from './Carrinho'
import Produto from './Produto'

export default function Navegacao(params) {
    return(
        <Layout title="Example Navegação #01">
            <Produto/>
            <Carrinho/>
        </Layout>
    )
}