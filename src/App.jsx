import "./App.css";
import RegularList from "./RegularList";
import LargePersonListItem from "./people/LargePersonListItem";
import SmallPersonListItem from "./people/SmallPersonListItem";
const People = [
  {
    name: "Shubair",
    age: 21,
    hairColor: "blue",
    hobbies: ["A", "B", "C"],
  },
  {
    name: "Shah",
    age: 21,
    hairColor: "black",
    hobbies: ["A", "B", "C"],
  },
  {
    name: "Kilo",
    age: 21,
    hairColor: "blue",
    hobbies: ["A", "B", "C"],
  },
  {
    name: "Sh",
    age: 21,
    hairColor: "bred",
    hobbies: ["A", "B", "C"],
  },
];

function App() {
  return (
    <>
      <RegularList
        items={People}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={People}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
    </>
  );
}

export default App;
