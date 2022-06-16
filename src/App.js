import './App.css';
import { useState, useEffect } from 'react';
import MovieForm from './MovieForm.js';
import Preview from './Preview.js';
import Posters from './Posters.js';
import TitleInput from './TitleInput.js';
import DirectorInput from './DirectorInput.js';
import ColorInput from './ColorInput.js';

function App() {
  const [titleInput, setTitleInput] = useState('');
  const [directorInput, setDirectorInput] = useState('');
  const [colorInput, setColorInput] = useState('');
  function handleSubmit() {
    
  }

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
      <Preview />
      <Posters />
    </div>
  );
}

export default App;
