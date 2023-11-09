import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar
                    expand="lg"
                    style={{
                        backgroundColor: "transparent",
                        WebkitBackdropFilter: "blur(2px)",
                        backdropFilter: "blur(2px)",
                    }}
                    data-bs-theme="dark"
                    className="w-full fixed z-50"
                >
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src="./favicon.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{" "}
                            SuelAR
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav variant="underline" className="me-auto">
                                <Nav.Link href="/ecosistema" className="text-white">
                                    Ecosistema
                                </Nav.Link>
                                <Nav.Link href="/nosotros" className="text-white">Nosotros</Nav.Link>
                                <Nav.Link href="/privacidad" className="text-white">
                                    Privacidad
                                </Nav.Link>
                                <Nav.Link href="/wiki" className="text-white">Wiki</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes />
            </BrowserRouter>
        </>
    );
}

export default App;
