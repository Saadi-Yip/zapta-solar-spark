import "./App.css";
import Connettiti from "./components/Connettiti";
import ConnessoSection from "./components/connesso";
import ContactUs from "./components/contact";
import Faq from "./components/faq";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import PercheSection from "./components/perche";
import Scegli from "./components/scegli";
import Services from "./components/services";
import SireSection from "./components/sire";
import {
  navLinks,
  scegliData,
  percheData,
  percheData2,
  faqData,
  serviceData,
} from "./data/data";
function App() {
  return (
    <>
      <Navbar links={navLinks} />
      <HeroSection />
      <Services serviceData={serviceData} />
      <SireSection />
      <ConnessoSection />
      <PercheSection percheData={percheData} percheData2={percheData2} />
      <Scegli data={scegliData} />
      <Connettiti />
      <Faq faqData={faqData} />
      <ContactUs />
      <Footer links={navLinks} />
    </>
  );
}

export default App;
