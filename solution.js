//topButton
const topButton = document.getElementById("topBtn");

window.onscroll = function() { 
  scrollFunction() 
};

function scrollFunction() {
  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

///////////////////////////////////////////////////////////////////////////////////

//carousel

 let slider = tns({
  container: '.my-slider',
  items: 1,
  slideBy: 'page',
  mouseDrag: 'mouseDrag',
  autoplay: true,
  autoplayButton: '.auto',
  autoplayText: ['Start', 'Stop'],
  controlsContainer: '#controls',
  prevButton: '.previous',
  nextButton: '.next',
  responsive: {
      320: {
        items: 1
      },
      640: {
        items: 3
      },
      1007: {
        items: 3
      }
    }
});

 ///////////////////////////////////////////////////////////////////////////////////

 //loadMore

 const loadMoreBtn = document.querySelector('#loadMoreBtn');
 loadMoreBtn.addEventListener("click", loadMore);

 function loadMore() {

 async function getImage() {

  let url = 'https://25.media.tumblr.com/tumblr_m2frwgKzN01r6b7kmo1_500.jpg';

  try {
      let response = await fetch(url);
      return await response.json();
  } catch (err) {
      console.log(err);
  }
}

async function renderImage() {

  let image = await getImage();
  let html = `<section class="loadMore">
               <img src="${image}" >
              </section>`;
              
  let carouselData = document.querySelector('.carousel-wraper');
  carouselData.innerHTML = html;
}

renderImage();

}

