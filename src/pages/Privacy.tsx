import { Container } from "react-bootstrap";

function Privacy() {
    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                color: "#fff",
                background: "linear-gradient(to bottom, #54c5ef, #004871)",
            }}
        >
            <Container className="pt-28">
                <h1>Política de Privacidad</h1>
                <p>
                    SuelAR y su equipo se toman muy seriamente tu privacidad.
                    Más allá de la información provista a desarrolladores por
                    Google Play Services y Unity, no se utilizan servicios de
                    terceros para análisis o servicios publicitarios. SuelAR no
                    requiere información personal y no tiene interés en
                    obtenerla.
                </p>
            </Container>
        </div>
    );
}

export default Privacy;
