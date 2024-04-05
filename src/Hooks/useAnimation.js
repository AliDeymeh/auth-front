import { useRouter } from "next/router";
import { useEffect } from "react";

export const handelLazyImage = () => {
  const windowHeight = (window.innerHeight / 5) * 4;
  const images = document.querySelectorAll("img");

  images.forEach((e, i) => {
    const topSection = e.getBoundingClientRect().top;
    if (
      topSection < windowHeight + 250 &&
      e.getAttribute("src") === "/images/default-image.gif"
    ) {
      e.setAttribute("src", e.dataset.src);
    }
  });
};

export default function useAnimation() {
  const { pathname } = useRouter();

  useEffect(() => {
    if (typeof window != "undefined") {
      // handel added animation

      const handelAddAnimations = () => {
        const bottomTopAnimations = document.querySelectorAll(".fade-ani");
        const rightAnimation = document.querySelectorAll(".ani-right");
        const leftAnimation = document.querySelectorAll(".ani-left");

        const windowHeight = (window.innerHeight / 5) * 4;
        bottomTopAnimations.forEach((e) => {
          const topSection = e.getBoundingClientRect().top;
          if (topSection < windowHeight + 150) {
            e.dataset.animation = "active";
          }
        });
        rightAnimation.forEach((e) => {
          const topSection = e.getBoundingClientRect().top;
          if (topSection < windowHeight + 150) {
            e.dataset.animation = "active";
          }
        });
        leftAnimation.forEach((e) => {
          const topSection = e.getBoundingClientRect().top;
          if (topSection < windowHeight + 150) {
            e.dataset.animation = "active";
          }
        });
      };

      document.addEventListener("scroll", () => {
        handelAddAnimations();
        handelLazyImage();
      });
      handelAddAnimations();
      handelLazyImage();
      return () => {
        document.removeEventListener("scroll", () => {});
      };
    }
  }, [pathname]);

  return null;
}
