export default function Preview({ titleInput, directorInput, colorInput }) {
  return (
    <section id="preview-section">
      <div id="preview-poster" className="poster" style={{ background: `linear-gradient(to left top, ${ colorInput }, #5082F0` }}>
        <h2>{titleInput}</h2>
        <p>by {directorInput}</p>
      </div>
    </section>
  );
}