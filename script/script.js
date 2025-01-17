/**
 * This script dynamically creates 50 boxes, each containing a header and a paragraph,
 * and appends them to a container element. Additionally, it appends an image to the container.
 *
 * Author: Souhayl Taiss.
 * Date: 16-01-2025.
 */

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

// Create a popup box show an image when a box is clicked
const box = document.querySelectorAll(".container > div");
const keyframe = document.createElement("style");

box.forEach((div) => {
  div.addEventListener("click", overlayImage);
});

function overlayImage() {
  const overlay = document.createElement("div"),
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

  function showImage() {
    popupBox.style.width = "700px";
    popupBox.style.height = "auto";
    popupBox.style.transform = "translate(-50%,-50%)";
    closeButton.style.top = "-60px";
    popupImage.style.opacity = 1;
    popupBox.addEventListener("transitionend", () => {
      popupBox.style.height = popupImage.scrollHeight + "px";
    });
    popupBox.removeEventListener("transitionend", showImage);
  }

  closeButton.addEventListener("click", hideImage);
  function hideImage() {
    popupImage.style.opacity = 0;
    popupBox.style.width = "40px";
    popupBox.style.height = "40px";
    closeButton.style.top = "0";
    popupBox.addEventListener("transitionend", () => {
      popupBox.style.top = "-50%";
      setTimeout(() => {
        overlay.remove();
        popupBox.remove();
      }, 1000);
    });
  }
}
