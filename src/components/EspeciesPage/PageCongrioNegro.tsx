
import Especie from '../Especie';

const CongrioNegroPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/25. Congrio negro.png"
      modelSrc="models/CongrioNegro.glb"
      commonName="Congrio negro"
      scientificName="Genypterus maculatus"
      description="Especie de pez de cuerpo alargado con cabeza y dorso levemente amarillo; labios y mandíbula de color blanco, su vientre es amarillo iridiscente. Habita los bordes de los cañones submarinos desde Coquimbo hasta el extremo sur de Chile. Se alimenta de sardinas, langostinos, pulpos y calamares. Es de gran importancia económica en la pesquería siendo nosotros su principal depredador."
      maxDepth="400 m"
      maxSize="2 m"
      conservationStatus="?"
    />
  );
};

export default CongrioNegroPage;
