const fetchData = async () => {
  const response = await fetch("/data/testimonial.json");
  const data = response.json();
  return data;
};

const testimonial = async () => {
  const datas = await fetchData();
  const testimonialWrapper = document.querySelector(".testimonial_wrapper");

  datas.forEach((data) => {
    testimonialWrapper.innerHTML += `<figure class="testimonial">
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
};
testimonial();
export default testimonial;
