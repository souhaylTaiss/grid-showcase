/**
 * This script dynamically creates 50 boxes, each containing a header and a paragraph,
 * and appends them to a container element. Additionally, it appends an image to the container.
 * 
 * Author: Souhayl Taiss.
 * Date: 16-01-2025.
 */

// document.addEventListener("DOMContentLoaded", function() {
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


// });
const box = document.querySelectorAll(".container div");

box.forEach((div) => {
  div.addEventListener("click", () => {
    let overlay = document.createElement("div"),
      popupBox = document.createElement("div"),
      closeButton = document.createElement("img"),
      popupImage = document.createElement("img");

    overlay.className = "popup-overlay";
    popupBox.className = "popup-box";
    closeButton.className = "close-button";
    popupImage.src = "./assets/images/hot-air-balloons-6757939.jpg";
    closeButton.src = "./assets/images/clear.png";
    document.body.append(overlay);
    popupBox.append(closeButton);
    popupBox.append(popupImage);
    document.body.append(popupBox);

    setTimeout(() => {
      popupBox.style.top = "50%";
    }, 800);

    popupBox.addEventListener("transitionend", showImage);
    closeButton.addEventListener("click", hideImage);

    function showImage() {
      popupBox.classList.add("show");
      popupBox.style.transform = "translate(-50%,-50%)";
      closeButton.style.top = "-44px";
      popupImage.style.opacity = 1;
      setTimeout(() => {
        popupBox.style.height = popupBox.clientHeight + "px";
      }, 2000);
      popupBox.removeEventListener("transitionend", showImage);
    }

    function hideImage() {
      popupImage.style.opacity = 0;
      popupBox.style.height = 44 + "px";
      closeButton.style.top = "0";
      popupBox.classList.remove("show");
      popupBox.addEventListener("transitionend", removeImage);
    }

    function removeImage() {
      popupBox.style.top = "-50%";
      setTimeout(() => {
        overlay.remove();
        popupBox.remove();
      }, 1000);
    }
  });
});