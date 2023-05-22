export default function SmallPersonListItem({ person }) {
  const { name, age } = person;

  return (
    <>
      <p className="font-semibold">
        Name: {name}, Age: {age} years
      </p>
    </>
  );
}
