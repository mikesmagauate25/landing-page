const fetchData = async () => {
  const response = await fetch("/data/data.json");
  const data = await response.json();
  return data;
};

const dynamicProduct = async () => {
  const datas = await fetchData();

  const imageContainer = document.querySelector(".swatches_image_container");

  datas.forEach((data) => {
    imageContainer.innerHTML += `<figure class="swatch_container" tabindex="0" role="button" aria-label="${data.color} color swatch">
                <img src=${data.image} alt="bucket hat swatches" />
              </figure>`;
  });

  dynamicChange(datas);
};

const dynamicChange = (datas) => {
  const swatchContainer = document.querySelectorAll(".swatch_container");
  const productImage = document.querySelector(".product_image");
  const swatchName = document.querySelector(".swatch_color_name");
  swatchName.textContent = "black";
  swatchContainer.forEach((swatch, index) => {
    swatch.addEventListener("click", () => {
      const get = datas.find((data) => data.id === index + 1);

      document.startViewTransition(() => {
        productImage.src = `${get.image}`;
        swatchName.textContent = ` ${get.color}`;
      });
    });
  });
};

dynamicProduct();

export default dynamicProduct;
