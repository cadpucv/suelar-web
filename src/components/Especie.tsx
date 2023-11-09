import { Container } from "react-bootstrap";
import ModelViewer from "./ModelViewer";

interface EspecieProps {
    imageUrl: string;
    modelSrc: string;
    commonName: string;
    scientificName: string;
    description: string;
    maxDepth: string;
    maxSize: string;
    conservationStatus: string;
}

function Especie(props: EspecieProps) {
    return (
        <div
            style={{
                background: "linear-gradient(to bottom, #54c5ef, #004871)",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                minHeight: "100vh",
                color: "#fff",
            }}
        >
            <Container className="pt-28 pb-10">
                <div>
                    <img className="w-28 h-20" src={props.imageUrl} />
                    <h1>{props.commonName}</h1>
                </div>
                <ModelViewer modelSrc={props.modelSrc} />
                <div>
                    <h2>Nombre Común</h2>
                    <p>{props.commonName}</p>

                    <h2 className="pt-5">Nombre Científico</h2>
                    <p><em>{props.scientificName}</em></p>

                    <h3 className="pt-5">Descripción</h3>
                    <p>{props.description}</p>

                    <h4 className="pt-5">Profundidad máxima</h4>
                    <p>{props.maxDepth}</p>

                    <h4 className="pt-3">Talla máxima</h4>
                    <p>{props.maxSize}</p>

                    <h4 className="pt-3">Estado de conservación</h4>
                    <p>{props.conservationStatus}</p>
                </div>
            </Container>
        </div>
    );
}

export default Especie;
