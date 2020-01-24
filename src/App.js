import React, {useState, useEffect} from "react";
import "./App.css";

const App = () => {
  let [hdurl, setUrl] = useState('');
  let [alt, setAlt] = useState('Loading.');
  let [text, setText] = useState('');
  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => res.json())
        .then(data => {
          setUrl(data.hdurl);
          setAlt(data.explanation);
          setText(data.explanation);
        })
        .catch(err => setAlt('Image Failed to Load.'));
  }, []);
  return <div className='App'>
    <h1>NASA Astronomy Photo of the Day</h1>
    <div className='photo-container'>
      <img src={hdurl} alt={alt} />
    </div>
    <p>{text}</p>
  </div>
}

export default App;
