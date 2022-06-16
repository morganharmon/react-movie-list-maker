export default function DirectorInput({ setDirectorInput, directorInput }) {
  return (
    <div>
      <label>Director: </label>
      <input onChange={(e) => setDirectorInput(e.target.value)} value={ directorInput } />
    </div>
  );
}