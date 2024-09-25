import React from "react";

function handleOnScroll() {
  const section = document.getElementById("holistisk-halsa");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

const ButtonOnScroll = () => {
  return (
    <button
      onClick={handleOnScroll}
      className="w-40 h-16  bg-on-scroll-btn border-2 border-accent rounded-xl text-accent text-3xl"
    >
      Läs mer
    </button>
  );
};

export default ButtonOnScroll;
