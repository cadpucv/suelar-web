
import Especie from '../Especie';

const SolDeMarPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/31 Sol de mar.png"
      modelSrc="models/Soldemar.glb"
      commonName="Sol de mar"
      scientificName="Heliaster helianthus"
      description="Es un equinodermo de forma estrellada que puede tener entre 28 a 39 brazos, su superficie es café con pequeños puntos rojos, amarillos y blancos. Como todas las variedades de estrella, al ser atacada puede desprender sus brazos para distraer a sus oponentes. Habita las costas de Ecuador, Perú y Chile en bajas profundidades y sobre las rocas, por lo que es fácil de encontrar. Se alimenta de erizos negros, caracoles, chitones, lapas, bivalvos, crustáceos y otros."
      maxDepth="0-10 m"
      maxSize="20 cm"
      conservationStatus="FP"
    />
  );
};

export default SolDeMarPage;
