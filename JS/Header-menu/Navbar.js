function setupMenu() {
  const options = document.querySelectorAll(".option");

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
