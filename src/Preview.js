export default function Preview({ titleInput, directorInput, colorInput }) {
  return (
    <section id="preview-section">
      <div id="preview-poster" style={{ backgroundColor: `${ colorInput }` }}>
        <h2>{titleInput}</h2>
        <p>by {directorInput}</p>
      </div>
    </section>
  );
}