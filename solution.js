//topButton
const topButton = document.getElementById("topBtn");
const rootElement = document.documentElement;

window.onscroll = function() { 
  scrollFunction() 
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || rootElement.scrollTop > 500) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  rootElement.scrollTop = 0;
}


// topButton.addEventListener("click", scrollToTop);

// function scrollToTop() {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth"
//       });
//   }

// document.addEventListener("scroll", handleScroll);

// function handleScroll() {
//     let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
//     if ((rootElement.scrollTop / scrollTotal ) > 0.50 ) {
//         scrollToTopBtn.classList.add("showBtn");
//     } else {
//         scrollToTopBtn.classList.remove("showBtn");
//     }
//   }


  
// var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
// var rootElement = document.documentElement;

// function handleScroll() {
//   // Do something on scroll
//   var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
//   if (rootElement.scrollTop / scrollTotal > 0.8) {
//     // Show button
//     scrollToTopBtn.classList.add("showBtn");
//   } else {
//     // Hide button
//     scrollToTopBtn.classList.remove("showBtn");
//   }
// }

// function scrollToTop() {
//   // Scroll to top logic
//   rootElement.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// }
// scrollToTopBtn.addEventListener("click", scrollToTop);
// document.addEventListener("scroll", handleScroll);


//carousel

!(function(d) {

    const itemClassName = "carousel-photo",
    items = document.getElementsByClassName(itemClassName),
    totalItems = items.length,
    slide = 0,
    moving = true;

  // Set classes
  function setInitialClasses() {
    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
  }

  // Set event listeners
  function setEventListeners() {
    const next = d.getElementsByClassName('carousel-button-next')[0];
    const prev = d.getElementsByClassName('carousel-button-prev')[0];

    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);
  }

  // Next navigation handler
  function moveNext() {
   
    if (!moving) {
      if (slide === (totalItems - 1)) {
        slide = 0;
      } else {
        slide++;
      }
      
      moveCarouselTo(slide);
    }
  }

  // Previous navigation handler
  function movePrev() {
   
    if (!moving) {
      if (slide === 0) {
        slide = (totalItems - 1);
      } else {
        slide--;
      }
            
      moveCarouselTo(slide);
    }
  }

  function disableInteraction() {
    moving = true;
   
    setTimeout(function(){
      moving = false
    }, 500);
  }

  function moveCarouselTo(slide) {
    
    if(!moving) {
      disableInteraction();
     
      let newPrevious = slide - 1,
      newNext = slide + 1,
      oldPrevious = slide - 2,
      oldNext = slide + 2;
      
      if ((totalItems - 1) > 3) {
        if (newPrevious <= 0) {
          oldPrevious = (totalItems - 1);
        } else if (newNext >= (totalItems - 1)){
          oldNext = 0;
        }
       
        if (slide === 0) {
          newPrevious = (totalItems - 1);
          oldPrevious = (totalItems - 2);
          oldNext = (slide + 1);
        } else if (slide === (totalItems -1)) {
          newPrevious = (slide - 1);
          newNext = 0;
          oldNext = 1;
        }
        
        items[oldPrevious].className = itemClassName;
        items[oldNext].className = itemClassName;
     
        items[newPrevious].className = itemClassName + " prev";
        items[slide].className = itemClassName + " active";
        items[newNext].className = itemClassName + " next";
      }
    }
  }

  function initCarousel() {
    setInitialClasses();
    setEventListeners();
    
    moving = false;
  }

  initCarousel();

  },(document));
