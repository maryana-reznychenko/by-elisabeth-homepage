import React from "react";

function handleOnScroll() {}

const ButtonOnScroll = () => {
  return (
    <button className="w-40 h-16  bg-on-scroll-btn border-2 border-accent rounded-xl text-accent text-3xl">
      <a
        href="https://www.bokadirekt.se/places/skonhet-och-halsa-52698"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
      Läs mer
    </button>
  );
};

export default ButtonOnScroll;
