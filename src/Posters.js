export default function Posters({ Poster, posterList }) {
  return (
    <section>
      {
        posterList.map((poster, i) => <Poster key={poster + i} poster={ poster } />)
      }
    </section>
  );
}