export default function NumberedList({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) {
  return (
    <>
      {items.map((item, i) => (
        <>
          <p className="font-bold">{i + 1}</p>
          <ItemComponent key={i} {...{ [resourceName]: item }} />
        </>
      ))}
    </>
  );
}
