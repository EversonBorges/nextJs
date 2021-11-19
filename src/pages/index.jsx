import Navegador from "../components/Navegador";

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh' 
        }}>
           <Navegador destino="/estiloso" label="Estiloso" cor="fuchsia"/>
           <Navegador destino="/example" label="Example" cor="hotpink"/>
           <Navegador destino="/navegacao" label="Navegação #01" />
           <Navegador destino="/cliente/MG/123" label="Navegação #02" cor="green"/>
        </div>
    )
}