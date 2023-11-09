
import Especie from '../Especie';

const JaibaMarmolaPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/3 Jaiba 1.png"
      modelSrc="models/JaivaMarmola.glb"
      commonName="Jaiba Marmola / Coinao, Marmola, Mola"
      scientificName="Cancer edwardsii"
      description="La Jaiba mármola es un crustáceo de caparazón convexo de color rojo oscuro o violáceo, el borde en su parte frontal es dentado. Posee cinco pares de patas, sus extremidades más desarrolladas terminan en forma de pinzas o también llamadas quelas, éstas son negras y no presenta espinas, generalmente, sólo una de ellas es más grande. Los adultos habitan los fondos de las zonas rocosas y arenosas en todo el litoral desde Ecuador hasta el Estrecho de Magallanes en nuestro país. Su periodo de desove es durante el verano. Al ser carnívoro y detritívoro se alimenta de ostras, choros y peces muertos. Es depredado por distintos peces y aves."
      maxDepth="45 m"
      maxSize="22 cm"
      conservationStatus="FP"
    />
  );
};

export default JaibaMarmolaPage;
