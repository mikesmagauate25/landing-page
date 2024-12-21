import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const fetchData = async () => {
  const response = await fetch("/data/testimonial.json");
  const data = response.json();
  return data;
};

const testimonial = async () => {
  const datas = await fetchData();
  const testimonialWrapper = document.querySelector(".swiper-wrapper");

  datas.forEach((data) => {
    testimonialWrapper.innerHTML += `<figure class="testimonial swiper-slide">
            <picture class="testimonial_image_container">
              <img src="${data.avatar}" alt="${data.name}" />
            </picture>
            <figcaption>
            <div>
            <img src="${data.icon}" alt="quotes" />
              <p class="testimonial_content">
                ${data.testimonial}
              </p>
            </div>
              
              <p class="testimonial_author">
                <strong>${data.name}</strong>
                <br />
                <span class="testimonial_location">${data.location}</span>
              </p>
            </figcaption>
          </figure>`;
  });

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 20,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
    },

    breakpoints: {
      // For screens smaller than 768px
      0: {
        // Handles all screens starting from 0px
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      // For screens 768px and larger
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  swiper;
};
testimonial();
export default testimonial;
