import "./App.css";
import NumberedList from "./NumberedList";
import RegularList from "./RegularList";
import LargePersonListItem from "./people/LargePersonListItem";
import SmallPersonListItem from "./people/SmallPersonListItem";
import LargeProductListItem from "./products/LargeProductListItem";
import SmallProductListItem from "./products/SmallProductListItem";
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
const products = [
  {
    name: "Shoes",
    price: 20,
    description: "Good",
    rating: 4.2,
  },
  {
    name: "Bike",
    price: 20,
    description: "Good",
    rating: 4.2,
  },
  {
    name: "Cars",
    price: 20,
    description: "Good",
    rating: 4.2,
  },
  {
    name: "Goods",
    price: 20,
    description: "Good",
    rating: 4.2,
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
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
    </>
  );
}

export default App;
