
import Especie from '../Especie';

const PulgaDeMarPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/24 Pulga.png"
      modelSrc="models/Pulga.glb"
      commonName="Pulga de Mar"
      scientificName="Emerita analoga"
      description="Recibe el nombre de chanchito de mar, pulga de mar o Limanche. Posee un caparazón oval con líneas transversales y su borde anterior es aserrado, tiene 3 dientes en su rostro, además de antenas, las cuales son dos veces más largas que sus ojos. Puede medir hasta 3,5 cm. Se puede encontrar en Alaska - México y Perú - Puerto Edén (Chile). Habita playas arenosas altamente oxigenadas. Se alimenta filtrando plancton y detritus. Sus depredadores son la jaiba, peces como el róbalo y aves litorales."
      maxDepth="0 a 3 m"
      maxSize="3,5 cm"
      conservationStatus="FP"
    />
  );
};

export default PulgaDeMarPage;
