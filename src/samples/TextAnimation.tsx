import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useState } from "react";

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

  return <div className="ani3 text-lg mt-10">Blinking Animation.</div>;
};

const FitText = () => {
  const [text, setText] = useState("Fit Text Animation");

  const randomText = () => {
    const randomWords = [
      "Hello World",
      "JavaScript",
      "SplitText",
      "Text Animation",
      "Fit Text",
    ];
    return randomWords[Math.floor(Math.random() * randomWords.length)];
  };

  return (
    <div
      className="font-bold whitespace-nowrap"
      style={{ fontSize: `calc(${200 / text.length + 1}vw)` }}
    >
      <button
        className=" text-sm bg-slate-500 cursor-pointer z-10"
        onClick={() => setText(randomText())}
      >
        change text
      </button>
      <p>{text}</p>
    </div>
  );
};

const CounterText = () => {
  const [num, setNum] = useState(0);
  const [prevNum, setPrevNum] = useState<number | null>(null);
  useGSAP(() => {
    SplitText.create(".num", {
      type: "words",
      autoSplit: true,
      mask: "words",
      onSplit: (self) => {
        gsap.from(self.words, {
          duration: 2,
          yPercent: 80,
          stagger: 0.1,
          ease: "expo.out",
        });
      },
    });
    SplitText.create(".prev-num", {
      type: "words",
      autoSplit: true,
      mask: "words",
      onSplit: (self) => {
        gsap.to(self.words, {
          duration: 2,
          yPercent: -80,
          stagger: 0.1,
          ease: "expo.out",
        });
      },
    });
  }, [num, prevNum]);

  const handleClick = () => {
    setPrevNum(num);
    setNum((prev) => prev + 1);
  };

  return (
    <div>
      <div className="text-[5rem] font-semibold w-full flex justify-end items-center">
        <button
          className=" text-sm bg-slate-500 cursor-pointer z-10"
          onClick={handleClick}
        >
          counter
        </button>

        <div className="flex items-center justify-center size-full text-[5rem] font-semibold">
          <p>[</p>
          <div className=" w-[5rem] h-[5rem] flex items-center justify-center ">
            <p className="prev-num absolute">{prevNum}</p>
            <p className="num absolute">{num}</p>
          </div>
          <p>]</p>
        </div>
      </div>
    </div>
  );
};

export { TextSplit, SideSlide, Blinking, FitText, CounterText };
