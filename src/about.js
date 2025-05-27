import "./styles.css";
import menuimage from "./Menu.png";
const menubg = document.createElement("img");
menubg.src = menuimage;

function aboutPage() {
  //Remove previous elements
  const mainContent = document.getElementById("content");
  mainContent.innerHTML = "";
  mainContent.classList.remove("Home");
  mainContent.classList.remove("Menu");
  mainContent.classList.add("About");
  //add new items

  const mainContainer = document.querySelector(".About");
  const titleDIV = document.createElement("div");
  const aboutHeading = document.createElement("h1");
  aboutHeading.innerHTML = "About Us";
  aboutHeading.id = "AboutHeading";
  titleDIV.appendChild(aboutHeading);
  const contentBox = document.createElement("div");
  contentBox.appendChild(menubg);
  contentBox.id = "ContentBG";

  const AboutcontentDiv = document.createElement("Div");
  AboutcontentDiv.innerHTML = `
    <p>Welcome to Punjab Palace, where tradition meets taste in every bite. 
    Established in 1985, our family-owned restaurant has been serving authentic 
    Punjabi cuisine for over three decades.</p>
    
    <p>Our recipes have been passed down through generations, preserving the 
    rich culinary heritage of Punjab. We take pride in using freshly ground 
    spices and traditional cooking methods to create dishes that transport 
    you to the vibrant streets of Punjab.</p>
    
    <p>From our signature butter chicken to our hearty dal makhani, every 
    dish tells a story of our commitment to authentic flavors and quality ingredients.</p>
    
    <p>Come experience the warmth of Punjabi hospitality and the legacy of 
    flavors that have made us a beloved destination for food enthusiasts.</p>
`;
  AboutcontentDiv.id = "about-text";
  contentBox.appendChild(AboutcontentDiv);

  //append to main HTML
  mainContent.appendChild(titleDIV);
  mainContent.appendChild(contentBox);
}

export default aboutPage;
