document.getElementById("menu").addEventListener("click", function () {
  document.getElementById("navbar").classList.toggle("open");

  // Verifica si el clic ocurrió fuera del menú y del botón de toggle
  document.addEventListener("click", function (event) {
    const navbar = document.getElementById("navbar");
    const menu = document.getElementById("menu");

    // Verifica si el clic ocurrió fuera del menú y del botón de toggle
    if (!navbar.contains(event.target) && !menu.contains(event.target)) {
      navbar.classList.remove("open");
    }
  });
});
