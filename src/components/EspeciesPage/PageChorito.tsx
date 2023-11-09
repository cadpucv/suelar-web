import Especie from '../Especie';

const ChoritoPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/7 Molusco 1.png"
      modelSrc="models/Chorito.glb"
      commonName="Chorito / mejillón"
      scientificName="Mytilus chilensis"
      description="Especie de molusco con una concha alargada y lisa, cuya superficie puede ser de color negruzco a violáceo, en su parte externa presenta estrías de crecimiento y está cubierta de periostraco, una capa delgada compuesta de material orgánico; en su interior es blanco con bordes nacar, azul y plateado. Habita las zonas desde el intermareal, principalmente en las rocas o sobre los sustratos duros, desde la primera región a la décima, donde su cultivo es ampliamente desarrollado para consumo humano. Se alimentan mediante filtración de agua y retienen la materia orgánica presente y microorganismos en suspensión. Sus principales depredadores son las estrellas de mar, soles de mar y jaibas."
      maxDepth="25 m"
      maxSize="8 cm"
      conservationStatus="FP"
    />
  );
};

export default ChoritoPage;
