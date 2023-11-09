
import Especie from '../Especie';

const PejesapoPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/16 Pez 9.png"
      modelSrc="models/Pejesapo.glb"
      commonName="Pejesapo"
      scientificName="Sicyasis sanguineus"
      description="Especie de pez de color marrón-verde sin escamas, que se caracteriza por una cabeza enorme y redonda, las aletas de su vientre le permiten adherirse a las rocas y contrarrestar las fuerzas de las olas, pueden permanecer fuera del agua por 17-40 hrs. Habita aguas costeras del intermareal y submareal, sobre acantilados rocosos expuestos al oleaje, en las costas entre Perú y Chile. Se alimenta de macroalgas, zooplancton, moluscos."
      maxDepth="600 m"
      maxSize="30 cm"
      conservationStatus="FP"
    />
  );
};

export default PejesapoPage;
