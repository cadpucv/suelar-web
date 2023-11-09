
import Especie from '../Especie';

const CongrioColoradoPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/23. Congrio colorado.png"
      modelSrc="models/CongrioColorado.glb"
      commonName="Congrio colorado"
      scientificName="Genypterus chilensis"
      description="Especie de pez heterotrofo de cuerpo alargado café y rojizo en su vientre, garganta y labios. Habita en los fondos rocosos desde Arica hasta el Archipiélago de los Chonos en el sur de Chile. Se alimenta principalmente de crustáceos, langostinos y zooplancton. Existen al menos 38 tipos de presas entre ellas, crustáceos (en su mayoría langostino colorado, moluscos (gastrópodos, calamares, peces óseos: familia Blennidae, Paralabrax humeralis, Poralatilus jugularis, Genypterus sp., y otros), y peces cartilaginosos."
      maxDepth="80 m"
      maxSize="150 cm"
      conservationStatus="FP"
    />
  );
};

export default CongrioColoradoPage;
