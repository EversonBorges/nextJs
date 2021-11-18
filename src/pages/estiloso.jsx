import styles from '../styles/estiloso.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import { Fragment } from 'react'

export default function Estiloso(){
    return (
        <Fragment>
            <Layout title="Componente Next.js e React">
                <div className={styles.roxo}>
                    <h1>Estilo Usando CSS módulos </h1>
                </div>
            </Layout>
        </Fragment>
    )
}