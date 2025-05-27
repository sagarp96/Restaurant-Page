import "./styles.css";
import aboutPage from "./about.js";
import menuPage from "./menu.js";
import homePage from "./home.js";

const homeButton = document.getElementById("homebutton");
const menuButton = document.getElementById("menubutton");
const aboutButton = document.getElementById("aboutbutton");

aboutButton.addEventListener("click", () => aboutPage());
menuButton.addEventListener("click", () => menuPage());
homeButton.addEventListener("click", () => homePage());

homePage();
