import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
    return (
        <div
            style={{
                boxSizing: "border-box",
                width: "100%",
                height: "100vh",
                overflowY: "scroll",
                scrollSnapType: "y mandatory",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100vh",
                    color: "#fff",
                    backgroundImage: "url(./background.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "center",
                    backgroundSize: "cover",
                    scrollSnapAlign: "start",
                }}
            >
                <Container className="gap-6 pt-28 text-center">
                    <Row>
                        <img src="./suelar.svg" className="h-80" />
                    </Row>
                    <Row className="justify-content-sm-center pt-3">
                        <Col sm="auto">
                            <Button
                                href="/wiki"
                                style={{
                                    fontSize: "1.8rem"
                                }}
                                className="w-96"
                                variant="outline-light">
                                Realidad Aumentada
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div
                style={{
                    width: "100%",
                    height: "100vh",
                    color: "#fff",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    scrollSnapAlign: "start",
                    background: "linear-gradient(to bottom, #54c5ef, #004871)",
                }}
            >
                <Container className="pt-28">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p>
                                <strong>SuelAR</strong> es un mural pintado en
                                la calzada oeste de Avenida Altamirano que
                                ilustra las especies más característica de
                                nuestro ecosistema marino presente en la región,
                                desde este lugar con un activador presente en la
                                pintura nos trasladamos a un juego de realidad
                                aumentada, que pretende educar y fortalecer el
                                conocimiento sobre la vida marina de nuestros
                                niños/as y jóvenes.
                            </p>
                        </div>
                        <div className="h-72 w-full">
                            <iframe
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867.0775989907929!2d-71.64367673353222!3d-33.02136558176802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e6bf56277e6d%3A0x2a8807807b997d8c!2sAltamirano%2022240%2C%20Valpara%C3%ADso!5e0!3m2!1sen!2scl!4v1677794741825!5m2!1sen!2scl"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                        <div className="mt-2 w-full text-center mx-auto">
                        <div className="grid grid-cols-3">
                            <div>
                                <img
                                    style={{
                                        display: "inline-block",
                                        width: "55%",
                                        margin: "4em 0",
                                    }}
                                    src="./logo-epv.svg"
                                />
                            </div>
                            <div>
                                <img
                                    style={{
                                        display: "inline-block",
                                        width: "35%",
                                        margin: "2em 0",
                                    }}
                                    src="./logo-pucv.svg"
                                />
                            </div>
                            <div>
                            <img
                                style={{
                                    display: "inline-block",
                                    width: "45%",
                                    margin: "2em 0",
                                }}
                                src="./logo-stl.svg"
                            />
                            </div>
                        </div>
                        </div>
                </Container>
            </div>
        </div>
    );
}

export default Home;

