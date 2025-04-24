import ButtonGradient from "./assets/svg/ButtonGradient";
import { Benefits, Collaboration, Header, Hero, Services, Pricing, Roadmap, Footer } from "./components";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
