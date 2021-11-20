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
           <Navegador destino="/estado" label="Componente com estado" cor="red"/>
           <Navegador destino="/integracao" label="Integração com API" cor="black"/>
           <Navegador destino="/estatico" label="Conteúdo estático" cor="#4a3b5c"/>
        </div>
    )
}