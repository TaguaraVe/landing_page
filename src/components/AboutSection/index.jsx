import bgImage from '../../assets/image/bgs/about.jpg';
import { teamData } from './teamData';
import Team from './TeamCard';

const AboutSection = ({ id, title, classes, bgClr = '#ff00ff' }) => {
  return (
    <>
      <section
        className="relative w-[90%] md:w-[95%] max-w-[1200px] py-24 my-20 mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 "
        id={id}
      >
        <div className=" relative flex flex-col justify-between  items-start text-lg">
          <h2 className=" myTitle">Acerca de Nosotros</h2>
          <p className="mb-2">
            <span className="font-semibold text-myOrange">
              Taguara Digital{' '}
            </span>
            inició operaciones en el año 2021, para ofrecer soluciones de
            tecnología innovadoras a las pequeñas empresas. Desde entonces,
            hemos crecido y expandido nuestro alcance a nivel nacional e
            internacional, manteniendo nuestro compromiso con la innovación y el
            servicio al cliente.
          </p>
          <p className="mb-2">
            En nuestra empresa, valoramos la creatividad y el trabajo en equipo.
          </p>

          <p className="mb-2">
            Nos esforzamos por entender las necesidades de nuestros clientes y
            ofrecer soluciones personalizadas que se adapten a sus requisitos
            específicos.
          </p>

          <p className="mb-2">
            Trabajamos con empresas de todos los tamaños y en diferentes
            industrias para ayudarles a alcanzar sus objetivos y lograr el éxito
            en el mundo digital.
          </p>
          <p className="mb-8">
            Nuestras oficianas se encuentran en Caracas - Venezuela, pero solo
            estamos a un click de distancia
          </p>

          <h3 className="mySubtitle">Misión y valores</h3>

          <p className="mb-8">
            Nuestra misión es ayudar a las empresas a crecer y prosperar
            mediante el uso de tecnología de vanguardia. Valoramos la
            innovación, la integridad y el trabajo en equipo y buscamos siempre
            superarnos a nosotros mismos y a nuestros clientes.
          </p>
        </div>
        <div className="hidden md:block relative w-full ">
          <img
            className="w-full h-full object-cover object-center"
            src={bgImage}
            alt="about-image"
          />
        </div>
      </section>

      {/* <section className=" relative w-full max-w-[1200px] py-12 px-8  my-16 mx-auto">
        <div className="w-full relative mb-8">
          <h2 className=" relative text-darkGreen font-bold text-4xl md:text-6xl text-left uppercase after:content-[''] after:absolute after:top-2 after:left-0 after:h-full after:w-[35%] after:border-b-4 after:border-myOrange mb-8">
            Nuestro Equipo
          </h2>
          <p className="mb-8 md:mb-2">
            Taguara Digital cree en su filosofía de trabajo apostando por
            personas comprometidas, creativas, honestas y profesionales. La
            pasión y el esfuerzo en cada uno de nuestros proyectos es nuestra
            seña de identidad.
          </p>
        </div>
        <article className="relative grid grid-cols-1 md:grid-cols-4 gap-4">
          {teamData.map((data, index) => (
            <Team key={index} teamData={data} />
          ))}
        </article>
      </section> */}
    </>
  );
};

export default AboutSection;
