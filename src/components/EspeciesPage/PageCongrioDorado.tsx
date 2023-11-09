
import Especie from '../Especie';

const CongrioDoradoPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/24. Congrio dorado.png"
      modelSrc="models/CongrioDorado.glb"
      commonName="Congrio dorado"
      scientificName="Genypterus blacodes"
      description="Especie de pez de cuerpo alargado café rojizo con puntos blancos a lo largo de todo su cuerpo, su vientre es más claro. Se alimenta de langostinos, peces pequeños y calamares. Habita en lugares fangosos de Arica a Magallanes."
      maxDepth="150 m"
      maxSize="120 cm"
      conservationStatus="FP"
    />
  );
};

export default CongrioDoradoPage;
