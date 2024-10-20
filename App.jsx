import FeatureSection from "./componenets/FeatureSection";
import HeroSection from "./componenets/HeroSection";
import Navbar from "./componenets/Navbar";


const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
      </div>
    </>
  );
}

export default App;
