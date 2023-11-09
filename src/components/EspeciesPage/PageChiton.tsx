import Especie from '../Especie';

const ChitonPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/30 Chiton.png"
      modelSrc="models/chiton.glb"
      commonName="Chitón"
      scientificName="Chiton magnificus"
      description="El chitón o apretador es de color negro a verde oscuro de manera uniforme o manchado con puntos azules, su característica principal es que su concha está formada por distintas placas (generalmente 8), el cinturón de estas placas tiene pequeñas escamas. Habita en pozas del intermareal y en lugares con mucho intercambio de aguas, desde las Galápagos en Ecuador hasta Cabo de Hornos en Chile. Se alimenta principalmente de algas rojas, pardas y verdes."
      maxDepth="13 m"
      maxSize="17.5 cm"
      conservationStatus="DD"
    />
  );
};

export default ChitonPage;
