export default function Poster({ poster, handleDelete }) {
  return (
    <div className="poster" onClick={() => handleDelete(poster.title)} style={{ background: `linear-gradient(to left top, ${poster.color}, #5082F0` }}>
      <h2>{ poster.title }</h2>
      <p>by { poster.director }</p>
    </div>
  );
}