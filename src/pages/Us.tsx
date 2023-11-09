import { Container } from "react-bootstrap";

function Us() {
    return (
        <div
            style={{
                background: "linear-gradient(to bottom, #54c5ef, #004871)",
                color: "#fff",
            }}
        >
            <Container className="pt-28 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
                    <div>
                        <img src="./suelar.svg" className="h-48" />
                        <p className="pt-5">
                            Proyecto <strong>SuelAR</strong> es una iniciativa
                            desarrollada por el Centro de Artes Digitales PUCV,
                            en colaboración con la escuela de ciencias del mar
                            de nuestra casa de estudios y a petición de la
                            Asociación Salvemos Las Torpederas. Como tal, nace
                            de la necesidad de atender los requerimientos
                            ciudadanos por reactivar y fortalecer los espacios
                            públicos como lugares de encuentro y aprendizaje.
                        </p>
                        <p className="pt-4">
                            En este sentido el proyecto <strong>SuelAR</strong>{" "}
                            se compone de dos instancias complementarias: Por un
                            lado, es un mural emplazado en la calzada oeste de
                            la Avenida Altamirano, cuyo diseño y motivos están
                            inspirados por las especies marinas más
                            características de nuestra zona costera, que están
                            pintados con formas y colores llamativos, pensando
                            en atraer a los niños; cuyo propósito es
                            constituirse en un hito de reconocimiento e
                            identificación territorial de la ciudadanía.
                        </p>
                        <p className="pt-4">
                            Por otro lado, <strong>SuelAR</strong> es también un
                            juego educativo, desarrollado como aplicación para
                            teléfonos móviles inteligentes con sistema operativo
                            android, y que sólo se activa y permite jugar en el
                            emplazamiento del mural, es decir, es un juego
                            georeferenciado. El juego consiste en la inmersión
                            de un buzo por una ruta marina, que contiene las
                            especies más características del ecosistemamarino y
                            en el cuál el buzo debe ir fotografiando para
                            completar su bitácora y tener un conocimiento más
                            acabado de lo que sucede bajo el mar, que por medio
                            de la observación e interacción pretende enseñar a
                            los niños y niñas el valor del océano en nuestras
                            vidas.
                        </p>
                        <p className="pt-4">
                            En este sentido, el proyecto <strong>SuelAR</strong>
                            , se caracteriza por convocar tanto al arte como la
                            ciencia, el ocio con el conocimiento, la
                            entretención con el aprendizaje y la tecnología con
                            la naturaleza, con la convicción de que hay que
                            desarrollar iniciativas que tengan en cuenta
                            demandas territoriales, miradas críticas de los
                            saberes académicos y el uso de tecnologías de
                            vanguardia, que permitan involucrar a la Universidad
                            con la ciudadania.
                        </p>

                        <h3 className="pt-5">Equipo Proyecto Suelar</h3>
                        <h4>Profesores</h4>
                        <li>
                            <strong>Ramón Aldunate</strong>, Instituto de Arte
                        </li>
                        <li>
                            <strong>Herbert Spencer</strong>, Escuela de
                            Arquitectura y Diseño
                        </li>
                        <li>
                            <strong>Paula Ruz</strong>, Escuela de Ciencias del
                            Mar
                        </li>

                        <h4 className="pt-4">Alumnos y ex-alumnos</h4>
                        <li>
                            <strong>Mayte Alé</strong>, Instituto de Arte
                        </li>
                        <li>
                            <strong>Ayrton Pereira</strong>, Escuela de
                            Arquitectura y Diseño
                        </li>
                        <li>
                            <strong>Kevin Rojas</strong>, Escuela de Ingeniería
                            Informática
                        </li>
                        <li>
                            <strong>Paula Tobar</strong>, Instituto de Arte
                        </li>
                        <li>
                            <strong>Sofía Barahona</strong>, Instituto de Arte
                        </li>
                        <img src="./logo-cad.svg" />
                    </div>
                    <div>
                        <img
                            style={{
                                width: "70%",
                            }}
                            src="./suelar_ilustracion.svg"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Us;

