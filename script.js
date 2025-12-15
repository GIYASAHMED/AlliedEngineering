let swiperContent = [
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    heading: "We create spaces <br> strong and reliable",
  },
  {
    id: 2,
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1683134181132-d21384512e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    heading: "We shape ideas <br> into lasting structures",
  },
  {
    id: 3,
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1671808062726-2a7ffcd6109e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    heading: "we build somethings <br> new and consistent",
  },

  {
    id: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    heading: "We build with vision <br> quality and trust",
  },
];

let swiperWrapper = document.querySelector(".swiper-wrapper");

swiperContent.map((elem) => {
  swiperWrapper.innerHTML += `<div class="swiper-slide">
            <img src=${elem.imgUrl} />
            <div class="swiperOverlay">
                <div class="swiperOverlayContent">
                <h4>Construction business</h4>
                <h1>${elem.heading}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore itaque eum eos ut et excepturi voluptatibus quae aspernatur ex!</p>
                <div class="buttons">
                  <button class="heroBtn ">Apply Now</button>
                  <button class="heroBtn ">Read More</button>
                </div>
                </div> 
            </div>
          </div>`
});

var swiper = new Swiper(".homeSwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },
});

// Hero section Complete
// On page scroll navbar will fix code is pending...