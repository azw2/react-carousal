import Carousel from "react-elastic-carousel";

import "./App.css";
import Item from "./components/Item";

// define the break points to use in carousel
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function App() {
  return (
    <div className="app">
      <Carousel breakPoints={breakPoints}>
        <Item title="One" />
        <Item title="Two" />
        <Item title="Three" />
        <Item title="Four" />
        <Item title="Five" />
        <Item title="Six" />
        <Item title="Seven" />
        <Item title="Eight" />
      </Carousel>
    </div>
  );
}

export default App;
