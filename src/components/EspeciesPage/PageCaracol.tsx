
import Especie from '../Especie';

const CaracolPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/11. Caracol.png"
      modelSrc="models/Caracol.glb"
      commonName="Caracol / melonhué o caracol negro"
      scientificName="Tegula atra"
      description="Es un molusco de cuerpo negro con una concha gruesa con forma de pirámide de color negro a violáceo y de interior nacarado. Se distribuye sobre las rocas y bajo de ellas, desde las costas de Perú hasta el Estrecho de Magallanes y la Patagonia en Chile. Es una especie herbívora, consumiendo principalmente huiro y lechuga de mar. Es depredado por estrellas de mar, gaviotas y pejesapos."
      maxDepth="0-16 m"
      maxSize="5.7 cm"
      conservationStatus="FP"
    />
  );
};

export default CaracolPage;
