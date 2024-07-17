//Get the menu bar to toggle the show of the menu
const menuBar = Array.from(document.getElementsByClassName("menu-open"));
const menuList = Array.from(document.getElementsByClassName("menu-list"));
//set the tracking value for the menuBar click
let showMenu = ""; //Is menu showing?
let menuPos = menuList[0].style.right;
if (menuPos === "-200px") {
  showMenu = false;
} else {
  showMenu = true;
}
//Add the eventlistener and toggle the menubar
menuBar[0].addEventListener("click", () => {
  if (!showMenu) {
    openMenu();
  } else {
    closeMenu();
  }
});
//function to close or open menuBar
function closeMenu() {
  menuList[0].style.right = "-200px";
  showMenu = false;
}
function openMenu() {
  menuList[0].style.right = "0";
  showMenu = true;
}

//Getting the menu items to toggle the page view.
const lists = Array.from(document.getElementsByClassName("lists"));
const pages = Array.from(document.getElementsByClassName("pages"));
const resumeURL =
  "https://drive.google.com/file/d/1us5fv-KuQFgVDaw4-eIaDy5SkFHvqjG-/view?usp=sharing";
const menuPageAttr = "data-page-number";
const noView = "noView";
const select = "select";
//tracking the current page
let currentPage = 0;
let menuNumber = 0;
let pageNumber = 0;
//Toggling a class name "noView" to present a page.
lists.forEach((e) => {
  e.addEventListener("click", () => {
    menuNumber = e.getAttribute(menuPageAttr);
    if (menuNumber == 4) {
      window.open(resumeURL, "_blank");
    } else {
      pages.forEach((el) => {
        pageNumber = el.getAttribute(menuPageAttr);
        if (menuNumber == pageNumber && currentPage == pageNumber) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          if (showMenu) {
            closeMenu();
          }
        } else if (menuNumber == pageNumber && currentPage != pageNumber) {
          e.classList.toggle(select); //update selected menu visual
          currentPage = pageNumber;
          el.classList.remove(noView);
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
          });
          if (showMenu) {
            closeMenu();
          }
        } else {
          el.classList.add(noView);
          lists[pageNumber].classList.remove(select); //Updating the visual for non-selected menu
        }
      });
    }
  });
});

//Hide the extra project card from the page
const cards = Array.from(document.getElementsByClassName("card"));
const projects = Array.from(document.getElementsByClassName("cardTxt"));
const cardHeader = 0; //position of the h2 tag in the projects array

projects.forEach((e, i) => {
  let header = e.children[cardHeader].innerText;
  if (header === "") {
    cards[i].classList.add(noView);
  }
});
