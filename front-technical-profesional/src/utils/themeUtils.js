// themeUtils.js
const darkTheme = "./../styles/themes/dark.scss";

export const switchTheme = async (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme); // Guardar la preferencia del tema
  if (theme === "dark") {
    await import(darkTheme);
  } else {
    await import("./../styles/themes/light.scss");
  }
};

// Función para obtener el tema guardado
export const loadSavedTheme = async () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  await switchTheme(savedTheme); // Aplicar el tema al cargar la app
};
