import "./styles.css";
import menuimage from "./Menu.png";
const menubg = document.createElement("img");
menubg.src = menuimage;

function menuPage() {
  //Remove previous elements
  const mainContent = document.getElementById("content");
  mainContent.innerHTML = "";
  mainContent.classList.remove("Home");
  mainContent.classList.remove("About");

  mainContent.classList.add("Menu");
  const mainContainer = document.querySelector(".Menu");
  const titleDIV = document.createElement("div");
  const titleHeading = document.createElement("h1");
  titleHeading.innerHTML = "Menu List";
  //menuList
  const menuListDiv = document.createElement("div");
  menuListDiv.classList.add("menuList");
  const menuonediv = document.createElement("div");
  const menutwodiv = document.createElement("div");
  const menuthreediv = document.createElement("div");

  const randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomColor3 = "#" + Math.floor(Math.random() * 16777215).toString(16);

  menuonediv.innerHTML = `<h3 style="color: ${randomColor1}">Butter Chicken</h3><p>Tender chicken pieces cooked in a rich, creamy tomato sauce with butter and spices.</p><span class='price'>$15.99</span>`;
  menutwodiv.innerHTML = `<h3 style="color: ${randomColor2}">Sarson Da Saag</h3><p>Traditional Punjabi dish made with mustard greens, served with makki di roti.</p><span class='price'>$12.99</span>`;
  menuthreediv.innerHTML = `<h3 style="color: ${randomColor3}">Amritsari Kulcha</h3><p>Stuffed bread with spiced potatoes, served with chickpea curry and onions.</p><span class='price'>$10.99</span>`;

  menuListDiv.appendChild(menuonediv);
  menuListDiv.appendChild(menutwodiv);
  menuListDiv.appendChild(menuthreediv);

  const contentBox = document.createElement("div");
  contentBox.appendChild(menubg);
  titleDIV.appendChild(titleHeading);

  titleDIV.id = "menuTitle";
  contentBox.id = "MenuBG";

  mainContainer.appendChild(titleDIV);
  mainContainer.appendChild(contentBox);
  mainContainer.appendChild(menuListDiv);
}
export default menuPage;
