import { Container } from "react-bootstrap";
import WikiButton from "../components/WikiButton";

function Wiki() {
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
                <div className="grid grid-cols-2 md:grid-cols-6 gap-1">
                    <WikiButton name="Blanquillo" image="./PNG_especies/26. Blanquillo.png" link="/blanquillo" />
                    <WikiButton name="Camarón Nailon" image="./PNG_especies/25 Camaron.png" link="/camaron_nailon" />
                    <WikiButton name="Caracol" image="PNG_especies/11. Caracol.png" link="/caracol" />
                    <WikiButton name="Chitón" image="PNG_especies/30 Chiton.png" link="/chiton" />
                    <WikiButton name="Cochayuyo" image="PNG_especies/4. Cochayuyo.png" link="/cochayuyo" />
                    <WikiButton name="Congrio Colorado" image="PNG_especies/23. Congrio colorado.png" link="/congrio_colorado" />
                    <WikiButton name="Congrio Dorado" image="PNG_especies/24. Congrio dorado.png" link="/congrio_dorado" />
                    <WikiButton name="Congrio Negro" image="PNG_especies/25. Congrio negro.png" link="/congrio_negro" />
                    <WikiButton name="Chorito" image="PNG_especies/7 Molusco 1.png" link="/chorito" />
                    <WikiButton name="Erizo Rojo" image="PNG_especies/16. Erizo blanco.png" link="/erizo_rojo" />
                    <WikiButton name="Erizo Negro" image="PNG_especies/28 Erizo.png" link="/erizo_negro" />
                    <WikiButton name="Estrella Chica" image="PNG_especies/33 Estrella C.png" link="/estrella_chica" />
                    <WikiButton name="Estrella Grande" image="PNG_especies/32 Estrella G.png" link="/estrella_grande" />
                    <WikiButton name="Huiro" image="PNG_especies/5 Alga verde.png" link="/huiro" />
                    <WikiButton name="Jaiba Marmola" image="PNG_especies/3 Jaiba 1.png" link="/jaiba_marmola" />
                    <WikiButton name="Jaiba Mora" image="PNG_especies/4 Jaiba 2.png" link="/jaiba_mora" />
                    <WikiButton name="Lapa" image="PNG_especies/13. Lapa.png" link="/lapa" />
                    <WikiButton name="Lechuga de Mar" image="PNG_especies/0 Alga verde.png" link="/lechuga_de_mar" />
                    <WikiButton name="Loco" image="PNG_especies/27 Loco.png" link="/loco" />
                    <WikiButton name="Luche" image="PNG_especies/1 Algas rojas 1.png" link="/luche" />
                    <WikiButton name="Pejesapo" image="PNG_especies/16 Pez 9.png" link="/pejesapo" />
                    <WikiButton name="Pingüino" image="PNG_especies/38 Pinguino.png" link="/pinguino" />
                    <WikiButton name="Pintacha" image="PNG_especies/27. Pintacha.png" link="/pintacha" />
                    <WikiButton name="Piure" image="PNG_especies/26 Piure.png" link="/piure" />
                    <WikiButton name="Pulga de Mar" image="PNG_especies/24 Pulga.png" link="/pulga_de_mar" />
                    <WikiButton name="Sol de Mar" image="PNG_especies/31 Sol de mar.png" link="/sol_de_mar" />
                    <WikiButton name="Tomollo" image="PNG_especies/28. Tomollo.png" link="/tomollo" />
                </div>
            </Container>
        </div>
    );
}

export default Wiki;
