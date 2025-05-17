import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Tutorial = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef(null);
  const circle = useRef(null);

  useGSAP(
    () => {
      // boxクラスの要素に対してアニメーションを適用
      gsap.to(".box", { rotation: "+=360", duration: 3 });

      // circleのrefに対してアニメーションを適用
      gsap.to(circle.current, { rotation: "-=360", duration: 3 });
    },
    // containerの中の要素に対してアニメーションを適用
    { scope: container }
  );

  return (
    <div className="App">
      <div ref={container} className="container">
        <div className="box gradient-blue">selector</div>
        <div className="circle gradient-green" ref={circle}>
          Ref
        </div>
      </div>
      <div className="box gradient-blue">selector</div>
    </div>
  );
};

export default Tutorial;
