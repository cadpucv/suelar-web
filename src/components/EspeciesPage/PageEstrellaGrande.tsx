
import Especie from '../Especie';

const EstrellaGrandePage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/32 Estrella G.png"
      modelSrc="models/EstrellaGrande.glb"
      commonName="Estrella grande"
      scientificName="Stichaster striatus"
      description="Invertebrado de forma estrellada de color rojo-naranja, se encuentra cubierto de gránulos y presenta 5 brazos largos cilíndricos. El grosor de sus extremidades disminuye gradualmente hasta su disco central, aunque pueden existir de 6 o 7. Habita sobre roqueríos expuestos y semi expuestos al oleaje, también se les puede encontrar adheridos al Chascón (Lessonia nigrescens). Consume lapas, crustáceos y piures, y es principalmente depredado por gaviotas."
      maxDepth="80 m"
      maxSize="33 cm"
      conservationStatus="DD"
    />
  );
};

export default EstrellaGrandePage;
