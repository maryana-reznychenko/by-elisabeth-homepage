// This is the pop-up with the details about services

import { SlClose } from "react-icons/sl";

const ServicesDetailsPopUp = ({ service, onClose }) => {
  return (
    <section className="fixed md:top-[10%] md:left-[auto] md:right-[auto] inset-0 md:w-1/2 md:h-3/4 md:rounded-xl z-50 flex flex-col justify-center bg-accent text-font-light ">
      <h2 className="p-0 md:p-5 font-bold ">{service.title}</h2>
      <h3 className="text-base sm:text-xl">{service.subtitle}</h3>
      {service.text.split("\n").map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <div
        className="pt-5 flex flex-col items-center gap-1 text-accent-light "
        onClick={onClose}
      >
        <SlClose className=" w-10 h-10 cursor-pointer" />{" "}
        <p className="uppercase text-xs">stäng</p>
      </div>
    </section>
  );
};

export default ServicesDetailsPopUp;
