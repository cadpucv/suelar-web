
import Especie from '../Especie';

const ErizoRojoPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/16. Erizo blanco.png"
      modelSrc="models/ErizoRojo.glb"
      commonName="Erizo rojo"
      scientificName="Loxechinus albus"
      description="Es un equinodermo de caparazón duro con forma de globo cubierto por espinas de colores verdes, azules o violetas, puede llegar a vivir 8 años. Habita fondos rocosos conformando agregaciones o bancos en las zonas del intermareal y submareal, asociada a comunidades de huiros y chascones. Se distribuye desde las costas de Perú hasta el Estrecho de Magallanes. Se alimenta de frondas de algas pardas y rojas, principalmente huiros durante el día y la noche, es depredado por peces y el hombre."
      maxDepth="340 m"
      maxSize="11 cm"
      conservationStatus="UV"
    />
  );
};

export default ErizoRojoPage;
