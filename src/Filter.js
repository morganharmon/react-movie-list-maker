export default function Filter({ filterInput, setFilterInput }) {
  return (
    <div>
      <label>Filter movies: </label>
      <input onChange={(e) => setFilterInput(e.target.value)} value={ filterInput } />
    </div>
  );
}