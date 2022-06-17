export default function Poster({ poster, handleDelete }) {
  return (
    <div onClick={() => handleDelete(poster.title)} style={{ backgroundColor: `${poster.color}` }}>
      <h2>{ poster.title }</h2>
      <p>{ poster.director }</p>
    </div>
  );
}