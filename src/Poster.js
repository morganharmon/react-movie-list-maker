export default function Poster({ poster }) {
  return (
    <div style={{ backgroundColor: `${poster.color}` }}>
      <h2>{ poster.title }</h2>
      <p>{ poster.director }</p>
    </div>
  );
}