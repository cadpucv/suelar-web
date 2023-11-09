import Especie from '../Especie';

const CochayuyoPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/4. Cochayuyo.png"
      modelSrc="models/cochayuyo.glb"
      commonName="Cochayuyo"
      scientificName="Durvillaea antarctica"
      description="Es un alga de color pardo que crece adherida a las rocas bajo el fondo marino por un disco, esta parte es llamada “grampón” que permite su adhesión. Es reconocida por su nombre quechua: Cochayuyo, que significa “nabo de mar” y Cochahuasca, que significa “soga de mar”. Es comestible, principalmente el tronco o huilte (lenfü) entre el disco mencionado anteriormente y sus ramificaciones. De sus tallos sacaban los mapuches un colorante pardo casi negro, para teñir sus creaciones en textiles. En Chile se distribuye desde la Región de Coquimbo a Cabo de Hornos en la zona austral."
      maxDepth="40 m"
      maxSize="15 m"
      conservationStatus="FP"
    />
  );
};

export default CochayuyoPage;
