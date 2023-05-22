import "./App.css";
import { SplitScreen } from "./components/SplitScreen";

const leftComponent = () => {
  return <h1 style={{ backgroundColor: "blue" }}>Left!</h1>;
};
const rightComponent = () => {
  return <h1 style={{ backgroundColor: "red" }}>Right!</h1>;
};

function App() {
  return (
    <>
      <SplitScreen
        left={leftComponent}
        right={rightComponent}
        leftWeight={1}
        rightWeight={3}
      />
    </>
  );
}

export default App;
