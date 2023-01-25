import React from 'react';
import { processData, servicesData } from './servicesData';

const Services = ({ id, title, classes, bgClr = '#ff00ff' }) => {
  return (
    <section
      className=" relative w-full bg-darkBlue text-myWhite"
      id={id}
      bgClr={bgClr}
    >
      <div className=" max-w-[1200px] mx-auto py-12  ServicesContent">
        <div className="text-xl">
          <h2 className="myTitle text-myGreen">Nuestros Servicios</h2>
          <p className="my-4 tracking-[1px]">
            <span className="font-semibold text-myOrange">
              Taguara Digital{' '}
            </span>
            ofrece asesoramiento para ayudar a su empresa, negocio o
            emprendimiento a comprender las oportunidades y desafíos que implica
            la transformación digital, y proporciona recomendaciones y
            estrategias para abordarlos de manera efectiva.
          </p>
          <div className="my-4 tracking-[1px]">
            <p className="font-semibold text-myOrange">
              ¡Transformamos tu idea en un sitio web exitoso!
            </p>
            Analizamos tus necesidades y requisitos para definir el alcance y el
            objetivo del sitio web y creamos un plan de proyecto detallado.
          </div>
          <div className="mt-4 mb-8 tracking-[1px]">
            <p className="font-semibold text-myOrange">
              ¡Transformamos tu idea en una tienda en línea de éxito!
            </p>
            Desarrollamos una tienda en línea atractiva y fácil de usar.
            Personalizamos la tienda en línea para ajustarse a tus necesidades y
            preferencias, integramos la tienda con otras plataformas para
            mejorar la visibilidad y el alcance.
          </div>

          <h3 className="mySubtitle text-myGreen mt-16">
            ¡Mira lo que podemos hacer por ti!
          </h3>
        </div>
        <div className=" my-8 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-8 ServicesGridProcess">
          {processData.map((process) => {
            return (
              <div key={process.id} className="tracking-[1px] ">
                <h4 className="text-xl font-bold text-myOrange first-letter:text-4xl first-letter:text-myGreen">
                  {process.title}
                </h4>
                <p>{process.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
