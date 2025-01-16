/**
 * This script dynamically creates 50 boxes, each containing a header and a paragraph,
 * and appends them to a container element. Additionally, it appends an image to the container.
 * 
 * Author: Souhayl Taiss.
 * Date: 16-01-2025.
 */

document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".container");

  // Create 50 boxes with a header and a paragraph
  for (let i = 0; i < 50; i++) {
    const box = document.createElement("div");
    const divContent = document.createElement("div");
    const header = document.createElement("h2");
    const paragraph = document.createElement("p");
    divContent.appendChild(header);
    divContent.appendChild(paragraph);
    box.appendChild(divContent);
    container.appendChild(box);
    header.textContent = "Text Header";
    paragraph.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel nunc nec nunc lacinia auctor.";
  }

  // Create an image
  const img = document.createElement("img");
  img.src = "./assets/images/hot-air-balloons-6757939.jpg";
  container.appendChild(img);
});
