
import Especie from '../Especie';

const EstrellaChicaPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/33 Estrella C.png"
      modelSrc="models/EstrellaC.glb"
      commonName="Estrella chica"
      scientificName="Patiria chilensis"
      description="Es un equinodermo con forma de estrella, puede ser de color marrón rojizo, o varía entre rosas, rojo y azul con manchas blancas. Esta especie es pequeña con un cuerpo ancho de forma pentagonal y de ángulos redondeados hacia sus extremidades, su cuerpo está cubierto de pequeñas espinas redondeadas. Se distribuye en fondos duros, sobre y debajo de las rocas y entre huiros en las mareas desde el norte del Perú hasta Talcahuano en Chile. Es una especie heterótrofa, significa que obtiene sus nutrientes y produce energía a través de la materia inorgánica del ambiente, además de ser carnívoro oportunista de moluscos. Es principalmente depredado por aves."
      maxDepth="30 m"
      maxSize="9 cm"
      conservationStatus="DD"
    />
  );
};

export default EstrellaChicaPage;
