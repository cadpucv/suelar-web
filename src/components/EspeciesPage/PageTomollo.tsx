
import Especie from '../Especie';

const TomolloPage = () => {
  return (
    <Especie
      imageUrl="PNG_especies/28. Tomollo.png"
      modelSrc="models/Tomollo.glb"
      commonName="Tomollo"
      scientificName="Labrisomus philippii"
      description="Pez de cuerpo alargado de color naranjo hasta el verde oliva puede llegar a pesar 1 kilo, posee ojos sobresalientes y aglobados celestes, numerosas manchas azules muy brillantes en sus mejillas, además de pequeños tentáculos en sus fosas nasales y por su rostro,. Podemos encontrarlo en fondos rocosos y arenosos ya que forma escondites para delimitar su territorio y proteger sus nidos. Se ubica entre las costas de Perú y Chile. En su hábitat se alimenta de peces pequeños, crustáceos y erizos de mar."
      maxDepth="30 m"
      maxSize="31 cm"
      conservationStatus="FP"
    />
  );
};

export default TomolloPage;
