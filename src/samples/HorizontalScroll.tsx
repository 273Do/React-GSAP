import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAPのプラグインを登録
gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const items = section.querySelectorAll(".horizontal-item")!;

    const scrollTween = gsap.to(items, {
      xPercent: -100 * (items.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=3000", // スクロール距離を調整
        pin: true,
        scrub: 1,

        // markers: true, // デバッグ用マーカー（開発時に便利）
      },
    });

    return () => {
      // クリーンアップ関数
      scrollTween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">
          通常の縦スクロールセクション（前）
        </h2>
        <p className="text-lg">
          ここは普通に縦にスクロールします。コンテンツを追加して十分なスクロール量を確保してください。
        </p>
        <div className="h-64"></div>
      </div>

      <div ref={triggerRef} className="w-full overflow-hidden bg-gray-200">
        <div ref={sectionRef} className="flex w-full relative">
          <div className="horizontal-item min-w-full h-screen flex flex-col justify-center items-center bg-red-500 text-white p-8">
            <h3 className="text-4xl font-bold mb-4">セクション 1</h3>
            <p className="text-xl">横スクロールエリアの内容 1</p>
          </div>
          <div className="horizontal-item min-w-full h-screen flex flex-col justify-center items-center bg-blue-500 text-white p-8">
            <h3 className="text-4xl font-bold mb-4">セクション 2</h3>
            <p className="text-xl">横スクロールエリアの内容 2</p>
          </div>
          <div className="horizontal-item min-w-full h-screen flex flex-col justify-center items-center bg-green-500 text-white p-8">
            <h3 className="text-4xl font-bold mb-4">セクション 3</h3>
            <p className="text-xl">横スクロールエリアの内容 3</p>
          </div>
          <div className="horizontal-item min-w-full h-screen flex flex-col justify-center items-center bg-yellow-500 text-white p-8">
            <h3 className="text-4xl font-bold mb-4">セクション 4</h3>
            <p className="text-xl">横スクロールエリアの内容 4</p>
          </div>
        </div>
      </div>

      <div className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">
          通常の縦スクロールセクション（後）
        </h2>
        <p className="text-lg">
          ここも普通に縦にスクロールします。スクロール効果が終わった後の通常コンテンツです。
        </p>
        <div className="h-64"></div>
      </div>
    </div>
  );
}
