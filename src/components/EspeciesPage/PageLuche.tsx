
import Especie from '../Especie';

const LuchePage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/1 Algas rojas 1.png"
      modelSrc="models/Luche.glb"
      commonName="Luche"
      scientificName="Porphyra columbinap"
      description="Es un alga roja comestible, se conforma principalmente de una lámina que presenta en variedades de formas; pueden ser planas, onduladas o crespas, membranosas y transparentes, suaves al tacto, flexibles y elásticas,. Sus colores van desde el rosado, violáceo, rojo verdoso a verde. Se consume en recetas de guisos, acompañada de verduras.Se puede ubicar en las profundidades, al límite de la zona de mareas y crece de forma abundante en primavera a lo largo del litoral chileno."
      maxDepth="0-30 m"
      maxSize="10 cm"
      conservationStatus="FP"
    />
  );
};

export default LuchePage;
