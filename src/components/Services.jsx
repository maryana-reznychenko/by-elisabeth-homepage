import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ServicesDetailsPopUp from "./ServicesDetailsPopUp";

const Services = ({ data }) => {
  const [slide, setSlide] = useState(0); //UseState(0) - 0 is to account from the first item in the arrey
  const [showDetails, setShowDetails] = useState(false); // state to toggle pop-up visability
  const [selectedService, setSelectedService] = useState(null); // state to hold selected service details

  // Function to show next slide for onClick the right button
  const nextSlide = () => {
    if (slide === data.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  // Function to show previous slide for onClick the left button
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  // Function to open the pop-up with selected service details
  const handleShowDetails = (service) => {
    setSelectedService(service);
    setShowDetails(true);
  };

  // Function to close the pop-up
  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <section className="relative flex flex-col justify-center items-center w-full ">
      {/*The Left arrow to move slides to the left  */}
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
            <div className="flex justify-center ">
              <img
                src={item.image}
                alt={item.alt}
                width="400"
                height="220"
                className="w-[400px] md:w-[500px] h-[220px] md:h-[320px] object-cover md:shadow-lg md:shadow-[#1f3433]/50 md:rounded-xl  "
              />
            </div>

            <h2 className="pb-0 font-bold ">{item.title}</h2>
            <h3 className="text-base sm:text-xl">{item.subtitle}</h3>
            <button
              onClick={() => handleShowDetails(item)} // Open pop-up on click
              className="text-center underline"
            >
              läs mer om denna behandlingen
            </button>
          </article>
        );
      })}

      {/*The Right arrow to move slides to the right  */}
      <MdKeyboardArrowRight
        className="absolute w-14 h-14 cursor-pointer right-0 lg:right-1/4"
        onClick={nextSlide}
      />

      {/* Pop-up for service details */}
      {showDetails && (
        <ServicesDetailsPopUp
          service={selectedService}
          onClose={handleCloseDetails}
        />
      )}

      {/* Indicators */}
      <div className="absolute bottom-0 mb-5">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={`${
              slide === index ? "bg-accent" : "bg-white"
            } h-3 w-3 rounded-full shadow-[0_0_5px_rgba(85,85,85,0.5)] mx-2`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Services;
