import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const TextSplit = () => {
  useGSAP(() => {
    SplitText.create(".ani1", {
      type: "chars",
      // linesClass: "chars",
      autoSplit: true,
      mask: "chars",
      onSplit: (self) => {
        gsap.from(self.chars, {
          duration: 0.5,
          yPercent: 100,
          stagger: 0.07,
          ease: "expo.out",
          // onComplete: () => {
          //   gsap.to(self.chars, {
          //     yPercent: 100,
          //     duration: 1.5,
          //     ease: "expo.out",
          //   });
          // },
        });
      },
    });
  }, []);

  return <div className="ani1 font-semibold text-[16vw]">Text Reveal.</div>;
};

const SideSlide = () => {
  useGSAP(() => {
    SplitText.create(".ani2", {
      type: "lines",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        gsap.from(self.lines, {
          duration: 1.5,
          xPercent: -100,
          // yPercent: 100,
          ease: "expo.out",
        });
      },
    });
  }, []);
  return (
    <div className="ani2 font-semibold text-[4rem] ">Side Slide Animation.</div>
  );
};

const Blinking = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".ani3",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.07,
        repeat: 6,
        yoyo: true,
        ease: "none",
        onComplete: () => {
          gsap.set(".ani3", { opacity: 1 });
        },
      }
    );
  }, []);

  return <div className="ani3  text-lg mt-10">Blinking Animation.</div>;
};

export { TextSplit, SideSlide, Blinking };
