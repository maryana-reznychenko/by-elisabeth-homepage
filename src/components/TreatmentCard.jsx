import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import React, { useEffect, useState } from "react";

const TreatmentCard = () => {
  // take data from 0-position in the array of {}
  const [data, setData] = useState(null);

  // start slide from 0-position in the array of numbers
  const [slide, setSlide] = useState(0);

  //Conditions to show slides only from data array
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  //Retrive data from JSON
  useEffect(() => {
    fetch("/treatment_data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(data);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="relative border-8 border-[#f03434] flex justify-center  w-4/5 h-[800px]   ">
      <HiOutlineArrowLeft
        className="absolute w-8 h-8 left-4 cursor-pointer"
        onClick={prevSlide}
      />

      {/* Only show the article that matches the current slide */}
      {data.map((service) => (
        <article key={service.id} className=" mx-4 border-2 border-[#34f05a]">
          <img
            src={service.image}
            alt="The themathic photo"
            width="178"
            height="100"
            className="object-cover shadow-lg shadow-[#7A7A7A]/10 rounded"
          />
          <h2>{service.title}</h2>
          <h3>{service.subtitle}</h3>
          {/* Split text by newline and render each paragraph separately */}
          {service.text.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      ))}
      <HiOutlineArrowRight
        className="absolute w-8 h-8 right-4 cursor-pointer "
        onClick={nextSlide}
      />
      <span className="absolute flex bottom-4 space-x-2">
        {data.map((_, id) => {
          return (
            <div>
              <button
                key={id}
                onClick={() => setSlide(id)}
                className={`w-3 h-3 rounded-full ${
                  id === slide ? "bg-font-main" : "bg-font-inactive"
                }`}
              ></button>
            </div>
          );
        })}
      </span>
    </section>
  );
};

export default TreatmentCard;
