import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ContactForm from './contactForm';

const Contact = () => {
  return (
    <section
      className="w-[90%] md:w-[95%] relative mx-auto max-w-[1200px] py-24"
      id="contact"
    >
      <h2 className="myTitle">Contáctanos</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <article className="flex flex-col justify-center items-center mt-8">
          <h3 className="mySubtitle">Cuentanos</h3>
          <ContactForm />
        </article>

        <article className=" flex flex-col justify-center items-center">
          <h3 className=" mySubtitle"> Siguenos en </h3>
          <div className="flex  ">
            <a
              className="mr-8 hover:text-darkGreen text-myOrange text-4xl  "
              href="https://www.linkedin.com/in/youssef-sabbagh/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="mr-8 hover:text-darkGreen text-myOrange text-4xl  "
              href="https://github.com/YoussefSabbagh"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="hover:text-darkGreen text-myOrange text-4xl  "
              href="https://twitter.com/TaguaraDigital"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contact;
