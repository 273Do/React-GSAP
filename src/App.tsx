import "./App.css";
import HorizontalScroll from "./samples/HorizontalScroll";
import { TextSplit, SideSlide, Blinking } from "./samples/TextAnimation";

import Tutorial from "./samples/Tutorial";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <Tutorial />
      <HorizontalScroll /> */}
      <TextSplit />
      <SideSlide />
      <Blinking />
    </div>
  );
}

export default App;
