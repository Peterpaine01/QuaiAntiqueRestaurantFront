import Route from "./Route.js";

//Define Routes here
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/Galerie", "Galerie", "/pages/galery.html", "/js/galery.js"),
];

//Title is displayed such as : Route.title - websitename
export const websiteName = "Quai Antique";
