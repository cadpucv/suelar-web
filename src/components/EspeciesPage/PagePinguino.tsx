
import Especie from '../Especie';

const PinguinoPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/38 Pinguino.png"
      modelSrc="models/Pnguino.glb"
      commonName="Pingüino de Humboldt"
      scientificName="Spheniscus humboldti"
      description="Más comúnmente conocido como pingüino de Humboldt, es un ave marina con plumas blancas y negras, presentando una particular 'U' blanca invertida en su pecho y abdomen, su pico y patas son negros, y puede pesar aproximadamente 4 kilos. Se distribuye desde el norte de Perú hasta el sur de Chile. Se alimenta de peces, pejerrey, merluza común, calamares y crustáceos."
      maxDepth="500 m"
      maxSize="70 cm"
      conservationStatus="VU"
    />
  );
};

export default PinguinoPage;
