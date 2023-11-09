
import Especie from '../Especie';

const JaibaMoraPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/4 Jaiba 2.png"
      modelSrc="models/JaibaMora.glb"
      commonName="Jaiba mora"
      scientificName="Homalaspis plana"
      description="Crustáceo de caparazón con forma similar a un pentágono con una superficie lisa y plana de color púrpura y manchas amarillas. Posee cinco pares de patas, sus extremidades más desarrolladas terminan en forma de pinzas o también llamadas quelas, éstas son negras y dentadas, generalmente, sólo una de ellas es más grande. Los adultos habitan las zonas intermareales expuestas al oleaje con buena oxigenación en todo el litoral desde Ecuador hasta el Estrecho de Magallanes en nuestro país. Consume otros crustáceos, moluscos y erizos. Esta especie se desove durante el invierno y primavera."
      maxDepth="18 m"
      maxSize="13 cm"
      conservationStatus="FP"
    />
  );
};

export default JaibaMoraPage;
