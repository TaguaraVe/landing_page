import { SliderData } from '../../data/SliderData';
import Hero from '../../components/Hero/Hero';
import AboutSection from '../../components/AboutSection';
import Services from '../../components/servicios';
import Contact from '../../components/contact';

const Home = () => {
  return (
    <>
      <Hero id="home" slides={SliderData} />
      <AboutSection
        id="about"
        title="About Public page"
        classes="title"
        bgClr={'var(--orangeClr)'}
      />
      <Services id="service" />
      <Contact id="contact" />
    </>
  );
};

export default Home;
