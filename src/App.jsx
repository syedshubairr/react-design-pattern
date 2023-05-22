import "./App.css";
import { SplitScreen } from "./components/SplitScreen";

const LeftComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "blue" }}>{name}</h1>;
};
const RightComponent = ({ msg }) => {
  return <h1 style={{ backgroundColor: "red" }}>{msg}!</h1>;
};

function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftComponent name="Shubair" />
        <RightComponent msg="Hello" />
      </SplitScreen>
    </>
  );
}

export default App;
