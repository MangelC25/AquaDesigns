function setupMenu() {
  const options = document.querySelectorAll(".option");
  const navigationHeight = document.querySelectorAll("section");

  options.forEach((option) => {
    

    option.addEventListener("click", () => {
      options.forEach((opt) => {
        if (opt !== option) {
          opt.classList.remove("active");
        }
      });
      option.classList.add("active");
    });
  });
  

}

export default setupMenu;
