// 2 - Seleccionar los elementos del DOM que se van a utilizar
const themeToggleBtn = document.getElementById("theme-toggle");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

// 4 - Función para cambiar el tema de la página usando la clase dark y los iconos de la luna y el sol
// 4 - Función para cambiar el tema de la página usando la clase dark y los iconos de la luna y el sol
function toggleMode() {
  // Toggle icon
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");

  // If is set in localstorage
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    // Si no hay clave color-theme en localstorage
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}


// 3 - Función para verificar si el tema es dark o light y mostrar el icono correspondiente
function test() {
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    moonIcon.classList.remove("hidden");
    sunIcon.classList.add("hidden");
  }
}

// 5.- llamar a la función toggleMode cuando se haga click en el botón de cambio de tema
themeToggleBtn.addEventListener("click", toggleMode);

document.addEventListener("DOMContentLoaded", test); // 1 - Cuando se carga la página se ejecuta la función test para verificar si el tema es dark o light y mostrar el icono correspondiente
