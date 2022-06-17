export default function Filter({ filterInput, setFilterInput }) {
  return (
    <div>
      <input onChange={(e) => setFilterInput(e.target.value)} value={ filterInput } />
    </div>
  );
}