import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Services = ({ data }) => {
  const [slide, setSlide] = useState(0); //UseState(0) - 0 is to account from the first item in the arrey

  // Function to show next slide for onClick the right button
  const nextSlide = () => {
    if (slide === data.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };
  // Function to show previous slide for onClick the left button /ternary operator/
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <section className="relative flex flex-col justify-center items-center w-full ">
      <MdKeyboardArrowLeft
        className="absolute w-14 h-14 cursor-pointer left-0 lg:left-1/4 "
        onClick={prevSlide}
      />
      {data.map((item, index) => {
        return (
          <article
            key={index}
            className={`${
              slide === index ? "block" : "hidden"
            }  flex flex-col pb-16 md:mx-28 md:px-14`}
          >
            <div className="flex justify-center">
              <img
                src={item.image}
                alt={item.alt}
                width="400"
                height="220"
                className="md:rounded w-[400px] md:w-[500px] h-[220px] md:h-[320px] object-cover"
              />
            </div>

            <h2 className="pb-0">{item.title}</h2>
            <h3 className="text-base sm:text-xl">{item.subtitle}</h3>
            <a href="#" className="text-center underline">
              läs mer om denna behandlingen
            </a>
            {/* {item.text.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))} */}
          </article>
        );
      })}
      <MdKeyboardArrowRight
        className="absolute w-14 h-14 cursor-pointer right-0 lg:right-1/4"
        onClick={nextSlide}
      />
      {/* Indicators */}
      <div className="absolute bottom-0 mb-5">
        {data.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={`${
                slide === index ? "bg-accent" : "bg-white"
              } h-3 w-3 rounded-full shadow-[0_0_5px_rgba(85,85,85,0.5)] mx-2`}
            ></button>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
