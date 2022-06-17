export default function Posters({ Poster, visiblePosters, Filter, filterInput, setFilterInput, handleDelete }) {
  return (
    <section>
      <Filter filterInput={ filterInput } setFilterInput={ setFilterInput } />
      {
        visiblePosters.map((poster, i) => <Poster key={poster + i} poster={ poster } handleDelete={ handleDelete } />)
      }
    </section>
  );
}