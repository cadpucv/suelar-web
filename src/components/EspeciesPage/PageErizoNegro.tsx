
import Especie from '../Especie';

const ErizoNegroPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/28 Erizo.png"
      modelSrc="models/ErizoN.glb"
      commonName="Erizo negro"
      scientificName="Tetrapigus niger"
      description="Equinodermo de color negro que presenta en toda la parte superior de su estructura púas de 1.2 cm de largo. Se diferencian 5 placas principales, ya que entre ellas las púas se hacen más pequeñas y su pigmentación es más oscura. Habita en aguas someras en intermareales y submareales rocosos en ambientes expuestos y protegidos, desde la región de Coquimbo hasta el Estrecho de Magallanes. Se alimenta de algas verdes, rojas, pardas, picorocos y percebes."
      maxDepth="40 m"
      maxSize="12 cm"
      conservationStatus="DD"
    />
  );
};

export default ErizoNegroPage;
