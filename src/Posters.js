export default function Posters({ Poster, visiblePosters, Filter, filterInput, setFilterInput }) {
  return (
    <section>
      <Filter filterInput={ filterInput } setFilterInput={ setFilterInput } />
      {
        visiblePosters.map((poster, i) => <Poster key={poster + i} poster={ poster } />)
      }
    </section>
  );
}