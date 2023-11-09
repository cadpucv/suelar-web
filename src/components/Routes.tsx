import { Routes as ReactRoutes, Route } from "react-router-dom";
import * as Pages from "../pages";
import BlanquilloPage from "./EspeciesPage/PageBlanquillo";
import CamaronNailonPage from "./EspeciesPage/PageCamaron";
import CaracolPage from "./EspeciesPage/PageCaracol";
import ChitonPage from "./EspeciesPage/PageChiton";
import CochayuyoPage from "./EspeciesPage/PageCochayuyo";
import CongrioColoradoPage from "./EspeciesPage/PageCongrioColorado";
import CongrioDoradoPage from "./EspeciesPage/PageCongrioDorado";
import CongrioNegroPage from "./EspeciesPage/PageCongrioNegro";
import ChoritoPage from "./EspeciesPage/PageChorito";
import ErizoRojoPage from "./EspeciesPage/PageErizoRojo";
import ErizoNegroPage from "./EspeciesPage/PageErizoNegro";
import EstrellaChicaPage from "./EspeciesPage/PageEstrellaChica";
import EstrellaGrandePage from "./EspeciesPage/PageEstrellaGrande";
import HuiroPage from "./EspeciesPage/PageHurio";
import JaibaMarmolaPage from "./EspeciesPage/PageJaibaMarmola";
import JaibaMoraPage from "./EspeciesPage/PageJaibaMora";
import LapaPage from "./EspeciesPage/PageLapa";
import LechugaDeMarPage from "./EspeciesPage/PageLechugaMar";
import LocoPage from "./EspeciesPage/PageLoco";
import LuchePage from "./EspeciesPage/PageLuche";
import PejesapoPage from "./EspeciesPage/PagePejesapo";
import PinguinoPage from "./EspeciesPage/PagePinguino";
import PintachaPage from "./EspeciesPage/PagePintacha";
import PiurePage from "./EspeciesPage/PagePiure";
import PulgaDeMarPage from "./EspeciesPage/PagePulgaMar";
import SolDeMarPage from "./EspeciesPage/PageSolMar";
import TomolloPage from "./EspeciesPage/PageTomollo";

function Routes() {
    return (
        <ReactRoutes>
            <Route path="/" element={<Pages.Home />} />
            <Route path="/ecosistema" element={<Pages.Ecosystem />} />
            <Route path="/nosotros" element={<Pages.Us />} />
            <Route path="/privacidad" element={<Pages.Privacy />} />
            <Route path="/wiki" element={<Pages.Wiki />} />
            <Route path="/blanquillo" element={<BlanquilloPage />} />
            <Route path="/camaron_nailon" element={<CamaronNailonPage />} />
            <Route path="/caracol" element={<CaracolPage />} />
            <Route path="/chiton" element={<ChitonPage />} />
            <Route path="/cochayuyo" element={<CochayuyoPage />} />
            <Route path="/congrio_colorado" element={<CongrioColoradoPage />} />
            <Route path="/congrio_dorado" element={<CongrioDoradoPage />} />
            <Route path="/congrio_negro" element={<CongrioNegroPage />} />
            <Route path="/chorito" element={<ChoritoPage />} />
            <Route path="/erizo_rojo" element={<ErizoRojoPage />} />
            <Route path="/erizo_negro" element={<ErizoNegroPage />} />
            <Route path="/estrella_chica" element={<EstrellaChicaPage />} />
            <Route path="/estrella_grande" element={<EstrellaGrandePage />} />
            <Route path="/huiro" element={<HuiroPage />} />
            <Route path="/jaiba_marmola" element={<JaibaMarmolaPage />} />
            <Route path="/jaiba_mora" element={<JaibaMoraPage />} />
            <Route path="/lapa" element={<LapaPage />} />
            <Route path="/lechuga_de_mar" element={<LechugaDeMarPage />} />
            <Route path="/loco" element={<LocoPage />} />
            <Route path="/luche" element={<LuchePage />} />
            <Route path="/pejesapo" element={<PejesapoPage />} />
            <Route path="/pinguino" element={<PinguinoPage />} />
            <Route path="/pintacha" element={<PintachaPage />} />
            <Route path="/piure" element={<PiurePage />} />
            <Route path="/pulga_de_mar" element={<PulgaDeMarPage />} />
            <Route path="/sol_de_mar" element={<SolDeMarPage />} />
            <Route path="/tomollo" element={<TomolloPage />} />
        </ReactRoutes>
    );
}

export default Routes;
