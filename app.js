const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.querySelectorAll(".elem").forEach((item) => {
  let image = item.querySelector("img");

  let tl = gsap.timeline();

  let xTransform = gsap.utils.random(-100, 100);

  tl.set(
    image,
    {
      transformOrigin: `${xTransform < 0 ? "0%" : "100%"}`,
    },
    "start"
  )
    .to(
      image,
      {
        scale: 0,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      },
      "start"
    )
    .to(item, {
      xPercent: xTransform,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
});
