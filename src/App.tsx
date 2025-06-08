import "./App.css";
import HorizontalScroll from "./samples/HorizontalScroll";
import {
  TextSplit,
  SideSlide,
  Blinking,
  FitText,
  CounterText,
} from "./samples/TextAnimation";

import Tutorial from "./samples/Tutorial";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-10">
      {/* <Tutorial />
      <HorizontalScroll /> */}
      <TextSplit />
      <SideSlide />
      <Blinking />
      <FitText />
      <CounterText />
    </div>
  );
}

export default App;
