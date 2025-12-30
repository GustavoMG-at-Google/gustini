document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const imgHolders = gsap.utils.toArray(".img-holder");

  imgHolders.forEach((imgHolder, i) => {
    ScrollTrigger.create({
      trigger: imgHolder,
      start: "top top",
      pin: true,
      pinSpacing: false
    });
  });
});
