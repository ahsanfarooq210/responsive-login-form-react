import React, { useEffect } from "react";
import "./Caresoul.css";
import image1 from "../../assets/img/image1.png";
import image2 from "../../assets/img/image2.png";
import image3 from "../../assets/img/image3.png";

const Caresoul = () => {
  useEffect(() => {
    const bullets = document.querySelectorAll(".bullets span");
    const images = document.querySelectorAll(".image");
    bullets.forEach((bullet) => {
      bullet.addEventListener("click", moveSlider);
    });

    function moveSlider(event: any) {
      let index = event.target.dataset.value;

      let currentImage = document.querySelector(`.img-${index}`);
      images.forEach((image) => {
        image.classList.remove("show");
      });

      currentImage?.classList.add("show");

      const textSlider = document.querySelector<HTMLElement>(".text-group");
      if (textSlider != null)
        textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

      bullets.forEach((bullet) => bullet.classList.remove("active"));
      event.target.classList.add("active");
    }
  });

  return (
    <div className="carousel">
      <div className="image-wrapper">
        <img src={image1} className="image img-1 show" alt="" />
        <img src={image2} className="image img-2" alt="" />
        <img src={image3} className="image img-3" alt="" />
      </div>
      <div className="text-slider">
        <div className="text-wrap">
          <div className="text-group">
            <h2>Create your own courses</h2>
            <h2>Customize as you like</h2>
            <h2>Invite students to your class</h2>
          </div>
        </div>
        <div className="bullets">
          <span className="active" data-value={1} />
          <span data-value={2} />
          <span data-value={3} />
        </div>
      </div>
    </div>
  );
};

export default Caresoul;
