export default function TitleInput({ titleInput, setTitleInput }) {
  return (
    <div>
      <label>Movie title: </label>
      <input onChange={(e) => setTitleInput(e.target.value)} value={ titleInput } />
    </div>
  );
}