
import Especie from '../Especie';

const LocoPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/27 Loco.png"
      modelSrc="models/Loco.glb"
      commonName="Loco"
      scientificName="Concholepas concholepas"
      description="El Loco o Pie de burro es un molusco de concha gruesa con una superficie rugosa de color café, pero el su interior es suave y blanca. Su pie o músculo pedal es grueso con manchas amarillas y grises. Vive adherido en las rocas del intermareal y submareal. Se alimenta de suspensívoros (restos de alimentos suspendidos), picorocos y piures. Es depredado por jaivas, estrellas y aves."
      maxDepth="50 m"
      maxSize="6,7 cm"
      conservationStatus="FP"
    />
  );
};

export default LocoPage;
