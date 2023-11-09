
import Especie from '../Especie';

const BlanquilloPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/26. Blanquillo.png"
      modelSrc="models/Blanquillo.glb"
      commonName="Blanquillo"
      scientificName="Acanthistius brasilianus"
      description="El blanquillo es un pez marino de la familia Serranidae, común en las costas del Pacífico y Atlántico Sudamericano."
      maxDepth="200 m"
      maxSize="50 cm"
      conservationStatus="LC"
    />
  );
};

export default BlanquilloPage;
