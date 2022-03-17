import Nav from "../UniversalComponents/Nav/Nav";
import LandingHero from "../UniversalComponents/Hero/LandingHero";
import Footer from "../UniversalComponents/Footer/Footer";
import FeaturedProducts1 from "./FeaturedSection1";
import FeaturedProducts2 from "./FeaturedSection2";
// import "../../App.css";

const LandingPage = () => {
  return (
    <>
      <Nav />
      <LandingHero />
      <main>
        <section className="featured-section_main">
          <header className="featured-section_heading">
            <h2>Hot Prints</h2>
            <p>Check out our latest and freshest prints</p>
          </header>
          <FeaturedProducts1 />
        </section>

        <section className="featured-section_second">
          <header className="featured-section_heading">
            <h2>Check out our leather collection</h2>
            <p>
              Specialist NucaPrints designer will handcraft the clothes you buy
            </p>
          </header>
          <FeaturedProducts2 />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
