export default function TitleInput({ setTitleInput, titleInput }) {
  return (
    <input onChange={(e) => setTitleInput(e.target.value)} value={ titleInput } />
  );
}