import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const TextReveal = () => {
  useGSAP(() => {
    SplitText.create(".ani1", {
      type: "chars",
      // linesClass: "chars",
      autoSplit: true,
      mask: "chars",
      onSplit: (self) => {
        const split = gsap.from(self.chars, {
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
        return split;
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
        const split = gsap.from(self.lines, {
          duration: 1.5,
          xPercent: -100,
          // yPercent: 100,
          ease: "expo.out",
        });
        return split;
      },
    });
  }, []);
  return (
    <div className="ani2 font-semibold text-[4rem] ">Side Slide Animation.</div>
  );
};

const Blinking = () => {
  gsap.fromTo(
    ".ani3",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.125, // 点滅1サイクルあたりの片道時間（合計0.25秒）
      repeat: 1, // 往復1回で合計0.5秒間点滅
      yoyo: true,
      ease: "none",
      onComplete: () => {
        gsap.set(".ani3", { opacity: 1 }); // 表示を固定
      },
    }
  );

  return <div className="ani3  text-lg mt-10">Blinking Animation.</div>;
};

export { TextReveal, SideSlide, Blinking };
