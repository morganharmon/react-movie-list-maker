export default function MovieForm({ 
  titleInput,
  setTitleInput,
  TitleInput,
  directorInput,
  setDirectorInput,
  DirectorInput,
  colorInput,
  setColorInput,
  ColorInput,
  handleSubmit
}) {
  return (
    <section id='movie-form-section' >
      <form onSubmit={handleSubmit}>
        <TitleInput titleInput={ titleInput } setTitleInput={ setTitleInput } />
        <DirectorInput directorInput={ directorInput } setDirectorInput={ setDirectorInput } />
        <ColorInput colorInput={ colorInput } setColorInput={ setColorInput } />
        <button>Submit</button>
      </form>
    </section>
  );
}