import "./styles.css";
import odinImage from "./Mainpage.png";
const image = document.createElement("img");
image.src = odinImage;

function homePage() {
  const mainContent = document.getElementById("content");
  mainContent.innerHTML = "";
  mainContent.classList.remove("Menu");
  mainContent.classList.remove("About");

  mainContent.classList.add("Home");
  const restroHeading = document.createElement("h1");
  const restroDiv = document.createElement("div");
  restroDiv.appendChild(restroHeading);
  const imageDiv = document.createElement("div");
  imageDiv.id = "mainImage";
  imageDiv.appendChild(image);
  restroHeading.id = "Heading";
  restroHeading.innerHTML = "The Pride of India";
  mainContent.appendChild(restroDiv);
  mainContent.appendChild(imageDiv);
}

export default homePage;
