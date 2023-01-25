import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// interface Slide {
//   title: string;
//   subtitle0: string;
//   subtitle1: string;
//   path: string;
//   label: string;
//   alt: string;
//   image: string;
// }

// interface Props {
//   slides: Slide[];
//   id: string;
// }

const Hero = ({ slides, id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    timeout.current = setTimeout(nextSlide, 5000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrentSlide((current) => (current === length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrentSlide((current) => (current === 0 ? length - 1 : current - 1));
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section id={id} className="relative overflow-hidden h-[calc(100vh-80px)] ">
      <div className="w-full h-full relative flex flex-col justify-center items-center text-center overflow-hidden">
        {slides.map((slide, i) => {
          return (
            <div className="w-full h-full" key={i}>
              {i === currentSlide && (
                <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center z-0 before:content-[''] before:w-full before:h-full before:bg-black/60 before:absolute before:z-10  ">
                  <img
                    className="absolute left-0 top-0 w-full h-full object-cover object-center block  "
                    src={slide.image}
                    alt={slide.alt}
                  />
                  <div className="absolute top-1/2 left-1/2 z-20 flex w-full flex-col justify-center items-center text-myWhite -translate-x-1/2 -translate-y-1/2  ">
                    <h1 className="text-4xl md:text-[4rem] mb-8 font-bold">
                      {slide.title}
                    </h1>
                    <h2 className="text-xl md:text-[2rem] text-myOrange mb-4 max-w-[600px] px-4">
                      {slide.subtitle0}
                    </h2>
                    <h3 className="text-lg md:text-[1.5rem] mb-4 max-w-[600px] px-4">
                      {slide.subtitle1}
                    </h3>
                    <button className="myBtn bg-myOrange" to={slide.path}>
                      {slide.label}
                      {/* <Arrow /> */}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <div className="absolute bottom-[50px] right-[50px] myFlex z-5 w-24 ">
          <FaChevronLeft
            className="text-xl rounded-full p-1 w-10 h-10 myFlex bg-myOrange hover:bg-myGreen hover:scale-95"
            onClick={prevSlide}
          />
          <FaChevronRight
            className="text-xl rounded-full p-1 w-10 h-10 myFlex bg-myOrange hover:bg-myGreen hover:scale-95"
            onClick={nextSlide}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
