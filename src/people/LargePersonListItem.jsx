export default function LargePersonListItem({ person }) {
  const { name, age, hairColor, hobbies } = person;
  return (
    <>
      <h1 className="font-bold">Name: {name}</h1>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
}
