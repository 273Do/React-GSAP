import "./App.css";
import HorizontalScroll from "./samples/HorizontalScroll";
import { TextReveal, SideSlide, Blinking } from "./samples/TextAnimation";

import Tutorial from "./samples/Tutorial";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <Tutorial />
      <HorizontalScroll /> */}
      <TextReveal />
      <SideSlide />
      <Blinking />
    </div>
  );
}

export default App;
