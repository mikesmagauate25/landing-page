import { gsap } from "gsap"; // Make sure you import GSAP if you're using module imports

const fetchData = async () => {
  const response = await fetch("/data/featured.json");
  const data = await response.json();
  return data;
};

const featured = async () => {
  const datas = await fetchData();
  const featuredWrapper = document.querySelector(".featured_wrapper");

  datas.forEach((data) => {
    featuredWrapper.innerHTML += `
        <figure class="featured_container">
          <picture>
            <img src="${data.images[0].url}" alt="${data.images[0].alt}"  />
            <img src="${data.images[1].url}" alt="${data.images[1].alt}" />
          </picture>
          <div class="featured_title_container">
            <h4>${data.category}</h4>
            <h4>price</h4>
          </div>
          <div class="featured_content_container">
            <h4>${data.name}</h4>
            <h4>${data.price}</h4>
          </div>
          <a class="featured_link" href="">view more</a>
        </figure>
      `;
  });

  const featuredContainer = document.querySelectorAll(".featured_container");

  featuredContainer.forEach((card) => {
    const images = card.querySelectorAll("picture img");

    card.addEventListener("mouseenter", () => {
      const width = card.offsetWidth; // Get the dynamic width of the container

      // GSAP animation
      gsap.to(images[0], {
        duration: 0.3,
        x: -width, // Move the first image left
        opacity: 0, // Fade out the first image
        ease: "power1.out",
      });

      gsap.to(images[1], {
        duration: 0.3,
        x: -width, // Move the second image left
        opacity: 1, // Fade in the second image
        ease: "power1.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      // GSAP animation for mouse leave
      gsap.to(images[0], {
        duration: 0.3,
        x: 0, // Reset position
        opacity: 1, // Reset opacity
        ease: "power2.out",
      });

      gsap.to(images[1], {
        duration: 0.3,
        x: 0, // Reset position
        opacity: 0, // Fade out the second image
        ease: "power2.out",
      });
    });
  });
};

featured();
export default featured;
