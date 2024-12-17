import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const navigationBgAnims = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sections = document.querySelectorAll("[data-section]");
  const bgLinks = gsap.utils.toArray(".bg_link");

  sections.forEach((section, index) => {
    // Initialize the scaleX as 0 (hidden) and set the transformOrigin to left
    gsap.set(bgLinks[index], { scaleX: 0, transformOrigin: "left" });

    ScrollTrigger.create({
      trigger: section,
      start: "top 10%", // Start when the top of the section reaches the top of the viewport
      end: () => `+=${section.offsetHeight}`, // Dynamic end point based on section height
      scrub: true,

      onUpdate: (self) => {
        const progress = self.progress; // Scroll progress between 0 and 1
        gsap.to(bgLinks[index], {
          scaleX: progress, // Scale based on progress
          duration: 0,
        });
      },
      onLeave: () => {
        gsap.to(bgLinks[index], {
          scaleX: 0, // Reverse scaleX to 0 when leaving the section
          duration: 0.5,
          ease: "power4.out",
          transformOrigin: "right", // Reverse the scale from right side
        });
      },

      onEnterBack: () => {
        gsap.to(bgLinks[index], {
          scaleX: 1, // Ensure scaleX is 1 when re-entering the section
          duration: 0.3,
          ease: "power4.out",
          transformOrigin: "left", // Reset to left origin when re-entering
        });
      },
    });
  });
};

navigationBgAnims();

export default navigationBgAnims;
