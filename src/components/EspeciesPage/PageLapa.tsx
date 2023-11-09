
import Especie from '../Especie';

const LapaPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/13. Lapa.png"
      modelSrc="models/Lapa.glb"
      commonName="Lapa"
      scientificName="Fissurella spp"
      description="Es un molusco gasterópodo, esto es que posee un pie carnoso por el cual vive adherido a las piedras y se alimenta. Es una especie sésil (no se mueve), posee una concha cónica que puede ser lisa o arrugada. El género Fissurella, en Chile está representado por 13 especies, de las cuales 10 conforman recursos pesqueros. Habita en la zona del intermareal y submareal de fondos duros,  pertenecientes a las costas de Perú, Chile y Argentina. Se alimenta principalmente de algas verdes, rojas y pardas, hidelbrandia (son como tapetes rojos pero no mineralizadas sobre las piedras); es depredado por soles de mar, peces y chungungos."
      maxDepth="15 m"
      maxSize="10 cm"
      conservationStatus="DD"
    />
  );
};

export default LapaPage;
