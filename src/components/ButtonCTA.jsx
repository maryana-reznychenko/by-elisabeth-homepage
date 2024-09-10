function ButtonCTA() {
  function handleClick() {
    window.open(
      "https://www.bokadirekt.se/places/skonhet-och-halsa-52698",
      "_blank",
      "noopener noreferrer"
    );
  }

  return (
    <div className="flex flex-col items-center gap-3 text-main">
      <button
        onClick={handleClick}
        className="w-40 h-16  bg-accent border-2 border-main rounded-xl text-3xl"
      >
        Boka
      </button>
      <p className="uppercase text-xs m-auto">öppnas i ett ny fönster</p>
    </div>
  );
}
export default ButtonCTA;
