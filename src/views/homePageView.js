import { categoryRoute } from "../route.js";

export const createMenuElement = () => {
  const menu = document.createElement("div");
  const menuIcon = document.createElement("i");
  menuIcon.className = "fa fa-bars";
  const menuIconHolder = document.createElement("a");
  menuIconHolder.className = "icon";
  menuIconHolder.href = "javascript:void(0)";
  menuIconHolder.appendChild(menuIcon);
  menu.className = "menu";

  menuIcon.addEventListener("click", navMenu);

  const menuItems = [
    { label: "Characters", route: "characters" },
    { label: "Comics", route: "comics" },
    { label: "Events", route: "events" },
    { label: "Series", route: "series" },
    { label: "Stories", route: "stories" },
    { label: "Favorites", route: "favorites" },
  ];

  menuItems.forEach(function (item) {
    let a = document.createElement("a");
    a.textContent = item.label;
    a.setAttribute("data-key", item.route);
    a.addEventListener("click", () => {
      categoryRoute(item.route);
    });
    menu.appendChild(a);
  });
  menu.appendChild(menuIconHolder);
  return menu;
};

export const createInputElement = () => {
  const inpuElement = document.createElement("input");

  inpuElement.type = "text";
  inpuElement.name = "name";
  inpuElement.id = "inputEvent";

  return inpuElement;
};

export const createLogoElement = () => {
  const logoImg = document.createElement("img");
  logoImg.addEventListener("click", () => {
   
    const getCategoryTag = document.getElementById("category-container");
    if (getCategoryTag) {
      getCategoryTag.style.display = "none";
      const getMainTag = document.querySelector(".main-page");
      getMainTag.style.display = "flex";
    }
  
  });

  logoImg.className = "logo";

  logoImg.src = "/public/assets/logo.png";
  logoImg.alt = "name";

  return logoImg;
};
export const createVideoElement = () => {
  const videoContainer = document.createElement("div");
  videoContainer.className = "video-container";
  const video = document.createElement("video");
  video.className = "video";

  video.src = "/public/assets/marvel.mp4";
  video.controls = true;
  video.autoplay = false;
  video.buffered;

  video.width = 1000;

  videoContainer.appendChild(video);

  return videoContainer;
};
export const createTexElement = () => {
  const textContainer = document.createElement("p");
  textContainer.className = "text-container";
  const marvelInfo =
    "Marvel Comics is an American comic book publisher and the property of The Walt Disney Company since December 31, 2009, and a subsidiary of Disney Publishing Worldwide since March 2023. Marvel was founded in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in August 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko, and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.Marvel counts among its characters such well-known superheroes as Spider-Man, Wolverine, Iron Man, Captain America, Thor, Hulk, Daredevil, Doctor Strange, Black Panther, and Captain Marvel, as well as popular superhero teams such as the Avengers, X-Men, Fantastic Four, and Guardians of the Galaxy. Its staple of well-known supervillains includes the likes of Doctor Doom, Magneto, Green Goblin, Red Skull, Loki, Ultron, Thanos, Kang the Conqueror, Apocalypse, and Galactus. Most of Marvel's fictional characters operate in a single reality known as the Marvel Universe, with most locations mirroring real-life places; many major characters are based in New York City, New York, United States.[4] Additionally, Marvel has published several licensed properties from other companies. This includes Star Wars comics twice from 1977 to 1986 and again since 2015.";
  const info = document.createTextNode(marvelInfo);

  textContainer.appendChild(info);

  return textContainer;
};

function navMenu() {
  const x = document.querySelector(".menu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}
