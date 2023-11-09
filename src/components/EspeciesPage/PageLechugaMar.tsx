
import Especie from '../Especie';

const LechugaDeMarPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/5 Alga verde.png"
      modelSrc="models/Lechuga.glb"
      commonName="Lechuga de mar"
      scientificName="Ulva lactuca"
      description="Es un alga cuya estructura se conforma de láminas verdes alargadas y finas, de bordes ondulados. Actualmente está siendo estudiada en el Laboratorio de Biotecnología Marina en la Universidad de Santiago de Chile por su capacidad de absorber y degradar hidrocarburos derivados del petróleo, su estudio podría ser clave en un futuro para la limpieza del océano. Se encuentra entre los roqueríos y en la zona intermareal a lo largo de todo Chile."
      maxDepth="0 - 45 m"
      maxSize="40 cm"
      conservationStatus="FP"
    />
  );
};

export default LechugaDeMarPage;
