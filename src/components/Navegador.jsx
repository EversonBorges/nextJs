import Link from 'next/link'
import styles from '../styles/Navegador.module.css'

export default function Navegador(props) {
    return (
        // eslint-disable-next-line @next/next/link-passhref
        <Link href={props.destino}>
            <div className={styles.navegador}
                 style={{
                     backgroundColor: props.cor ??  'dodgerblue'
                 }}
            >
                {props.label}
            </div>
        </Link>
    )
}