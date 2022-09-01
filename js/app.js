

/***Define Global Variables.*/
/*grab the list items.*/
const list_items = document.querySelector('#navbar__list');
/*target each section in the html body*/
const sections = document.querySelectorAll('section');

/***create a function that dynamically displays the nav's list items & links in the dom.*/
// Begin Main Functions
const createListElements = function() {
    //declare an empty string variable to be filled dynamically via js.
    let navbarElements = '';

    //run a forEach loop thru each section to target the list items and links.
    sections.forEach(section => {

    //run forEach loop to target the sectionID in each section.
    const sections = section.id;
    
    //grab the data_nav in each section.
    const data = section.getAttribute('data-nav');
    
    //js dynamically adds the list items and anchors to the dom elements.
    navbarElements += `<li id="li-${sections}"> 
    <a class="menu__link" href="#${sections}"> ${data}
    </a></li>`;
  });   
    //add and print the list items and anchors to the dom.
    list_items.innerHTML = navbarElements;
}
//call the anonymous function 
createListElements();



/***declare a function that removes the active class from sections and list items that are not active.*/
function removeClass(section) {  

  //grab the section.id attributes from all non-active sections.
  const isActive = section.getAttribute('id');
  
  //add li to section. remove all non-active sections and list items.
  document.getElementById('li-' + isActive).classList.remove('your-active-class');
  
  //remove the active background of non-active sections and list items.
  section.style.backgroundColor = 'transparent';
}
/***Build the code to add an Active Class.*/
//declare a function that grabs the sectionID and then adds active when at the Top of the viewport.
function addClass(section) { 

  //grab the section.id attributes from all sections.
  const isActive = section.getAttribute('id');
  
  //add the active li to the active section.
  document.getElementById('li-' + isActive).classList.add('your-active-class');

  //highlight backgrounds with a different color.
  section.style.backgroundColor = 'lightcoral';
}
/***declare a function to determine top and bottom position of current active section.*/
 function activeClass() {  
    //write a foreach loop to determine top and bottom coordinates of the active section.
    sections.forEach((section) => {  
      let elementOffset = section.getBoundingClientRect();

      //declare the if/else conditions to add or remove the active section based on the elementOffset top and bottom coordinates.
      if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
        addClass(section);
      } else {
        removeClass(section);
    }
  });
}    
//event handler
document.addEventListener('scroll', activeClass);



/***create the main function to use scrollIntoview method for smooth scroll.*/
const smoothScroll = () => {

    //loop thru the menu anchors and add a click event to the element. 
    document.querySelectorAll('.navbar__menu li .menu__link').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {

        //prevent the default response.
        e.preventDefault();
        //grab links and implement the scrollIntoView method using behavior:'smooth'.
        document.querySelector(anchor.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }

// Scroll to the section clicked by the link.
smoothScroll();