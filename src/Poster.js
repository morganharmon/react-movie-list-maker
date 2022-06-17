export default function Poster({ poster, handleDelete }) {
  return (
    <div className="poster" onClick={() => handleDelete(poster.title)} style={{ backgroundColor: `${poster.color}` }}>
      <h2>{ poster.title }</h2>
      <p>by { poster.director }</p>
    </div>
  );
}