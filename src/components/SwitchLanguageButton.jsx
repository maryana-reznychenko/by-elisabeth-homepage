// - - - - - - - - - - - - - - - - - - - -
//This is the button component to switch language

// This component has no priority for the first realise
// - - - - - - - - - - - - - - - - - - - -

const SwitchLanguageButton = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-1 ">
      <button className="font-arimo text-lg">SV</button>
      <div className="w-[2px] h-[1.125rem] bg-font-inactive"></div>
      <button className="font-arimo text-lg ">EN</button>
    </div>
  );
};

export default SwitchLanguageButton;
