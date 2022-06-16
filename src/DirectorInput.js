export default function DirectorInput({ setDirectorInput, directorInput }) {
  return (
    <input onChange={(e) => setDirectorInput(e.target.value)} value={ directorInput } />
  );
}