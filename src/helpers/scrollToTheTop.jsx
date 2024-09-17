//This function created to scroll to the top /SectionHero/
//when click on Logo what ever on the page
function scrollToTheTop() {
  const scrollToTheTop = document.getElementById("home");
  if (scrollToTheTop) {
    scrollToTheTop.scrollIntoView({ behavior: "smooth" });
  }
}

export default scrollToTheTop;
