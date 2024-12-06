import { gsap } from "gsap";

const mobileMenuAnims = () => {
  const mobileNavMenu = document.querySelector(".mobile_nav_menu");
  const mobileNavWrapper = document.querySelector(".mobile_nav_wrapper");
  const mobileNavLink = document.querySelectorAll(".mobile_nav_list a");
  const mobileHeaderCta = document.querySelector(".mobile_header_cta");

  if (
    !mobileNavMenu ||
    !mobileNavWrapper ||
    !mobileNavLink.length ||
    !mobileHeaderCta
  ) {
    console.error("Required elements not found in the DOM.");
    return;
  }

  let isMenuOpen = false; // State variable

  gsap.set(mobileNavWrapper, { scaleY: 0, transformOrigin: "top" });
  gsap.set(mobileNavLink, { y: 60 });
  gsap.set(mobileHeaderCta, { y: 10, opacity: 0 });

  const timeline = gsap.timeline({ paused: true });

  timeline
    .to(mobileNavWrapper, {
      scaleY: 1,
      duration: 0.4,
      ease: "power2.out",
    })
    .to(mobileNavLink, {
      stagger: 0.1,
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    })
    .to(
      mobileHeaderCta,
      { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
      "<0.3"
    );

  mobileNavMenu.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen; // Toggle state

    if (isMenuOpen) {
      timeline.play();
      mobileButtonClose();
    } else {
      timeline.reverse();
      mobileButtonOpen();
    }
  });
};

const mobileButtonClose = () => {
  const lines = gsap.utils.toArray(".mobile_nav_menu .line");
  gsap.to(lines[0], {
    rotate: -45,
    y: -2,
    transformOrigin: "right",
    duration: 0.3,
    ease: "power2.out",
  });
  gsap.to(lines[1], { x: 10, opacity: 0, duration: 0.3, ease: "power2.out" });
  gsap.to(lines[2], {
    rotate: 45,
    y: 2,
    transformOrigin: "right",
    duration: 0.3,
    ease: "power2.out",
  });
};

const mobileButtonOpen = () => {
  const lines = gsap.utils.toArray(".mobile_nav_menu .line");
  gsap.to(lines[0], {
    rotate: 0,
    y: 0,
    transformOrigin: "right",
    duration: 0.3,
    ease: "power2.out",
  });
  gsap.to(lines[1], { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" });
  gsap.to(lines[2], {
    rotate: 0,
    y: 0,
    transformOrigin: "right",
    duration: 0.3,
    ease: "power2.out",
  });
};

mobileMenuAnims();

export default mobileMenuAnims;
