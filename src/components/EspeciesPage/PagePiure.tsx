
import Especie from '../Especie';

const PiurePage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/26 Piure.png"
      modelSrc="models/Piure.glb"
      commonName="Piure"
      scientificName="Pyura chilensis"
      description="Superficie irregular llamada Champa, con incrustaciones de piedras, algas y fragmentos de conchas. Esta superficie se envuelve en su cuerpo blando y rojizo. Es el hábitat de otros animales como moluscos y pequeños crustáceos. Se le puede ubicar en las zonas del intermareal y submareal, desde el sur de las costas de Perú hasta el archipiélago de Chiloé. Se alimenta filtrando plancton y otros organismos suspendidos en el agua, es depredado por el loco, estrellas de mar y chungungos."
      maxDepth="0-10 m"
      maxSize="12 cm"
      conservationStatus="FP"
    />
  );
};

export default PiurePage;
