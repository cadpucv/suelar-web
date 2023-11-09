
import Especie from '../Especie';

const PintachaPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/27. Pintacha.png"
      modelSrc="models/Pintacha.glb"
      commonName="Pintacha o Bilagay"
      scientificName="Cheilodactylus variegatus"
      description="Especie de pez de tono grisáceo con alrededor de 6 a 7 líneas blancas, terminaciones de aletas en colores naranjas y rojos, labios gruesos y boca pequeña. Habita en las rocas entre algas desde Talcahuano hasta la zona norte. Se alimenta de crustáceos, camarones, moluscos como chitones y caracoles. Principalmente depredado por humanos y aves."
      maxDepth="20 m"
      maxSize="45 cm"
      conservationStatus="FP"
    />
  );
};

export default PintachaPage;
