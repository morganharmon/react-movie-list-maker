import './App.css';
import { useState, useEffect } from 'react';
import MovieForm from './MovieForm.js';
import Preview from './Preview.js';
import Posters from './Posters.js';
import TitleInput from './TitleInput.js';
import DirectorInput from './DirectorInput.js';
import ColorInput from './ColorInput.js';
import Poster from './Poster.js';
import Filter from './Filter.js';

function App() {
  const [titleInput, setTitleInput] = useState('');
  const [directorInput, setDirectorInput] = useState('');
  const [colorInput, setColorInput] = useState('');
  const [posterList, setPosterList] = useState([]);
  const [visiblePosters, setVisiblePosters] = useState([]);
  const [filterInput, setFilterInput] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    setPosterList([...posterList, { title: titleInput, director: directorInput, color: colorInput }]);
  }
  
  useEffect(() => {
    setVisiblePosters(posterList);
  }, [posterList]);

  useEffect(() => {
    setVisiblePosters(posterList.filter(poster => poster.title.toLowerCase().includes(filterInput.toLowerCase())));
  }, [filterInput]);

  return (
    <div className="App">
      <MovieForm 
        titleInput={ titleInput }
        setTitleInput={ setTitleInput }
        TitleInput={ TitleInput }
        directorInput={ directorInput }
        setDirectorInput={ setDirectorInput }
        DirectorInput={ DirectorInput }
        colorInput={ colorInput }
        setColorInput={ setColorInput }
        ColorInput={ ColorInput }
        handleSubmit={ handleSubmit } />
      <Preview
        titleInput={ titleInput }
        directorInput={ directorInput }
        colorInput={ colorInput } />
      <Posters
        Poster={ Poster }
        visiblePosters={ visiblePosters }
        Filter={ Filter }
        filterInput={ filterInput }
        setFilterInput={ setFilterInput } />
    </div>
  );
}

export default App;
