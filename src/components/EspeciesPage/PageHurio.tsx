
import Especie from '../Especie';

const HuiroPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/5 Alga verde.png"
      modelSrc="models/Huiro.glb"
      commonName="Huiro"
      scientificName="Macrocystis pyrifera"
      description="Especie de alga con tallos largos, cilíndricos y flexibles, de frondas con forma similar a lanzas y bordes dentados. Tiene estructuras con forma de globo llenas de aire que le permiten flotar. Su reproducción les permite formar densos bosques en los fondos submarinos. Se encuentra comúnmente en fondos rocosos, particularmente en la zona centro y sur del litoral en Chile."
      maxDepth="6-20 m"
      maxSize="300 cm de largo, disco de adhesión 40 cm de diámetro"
      conservationStatus="FP"
    />
  );
};

export default HuiroPage;
