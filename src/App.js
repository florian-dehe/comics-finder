import Search from "./Search";
import Grid from "./Grid";
import { useState, useEffect } from "react";

import "./App.css";

const apiURI = "http://localhost:5000/comics";

const axios = require('axios');

function App() {
  const [comics, setComics] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(apiURI).then( res => {
      const comics = res.data.comics;
      setComics(comics);
    })    
  }, []);
  
  const filteredComics = search.length === 0 ? comics :
            comics.filter(  comic => comic.title.toLowerCase().includes(search.toLowerCase())
                            ||  comic.collection.toLowerCase().includes(search.toLowerCase())
                            ||  comic.serie.toLowerCase().includes(search.toLowerCase())
                        );

  return <div>
    <h3 className="title">COMICS FINDER</h3>
    <div className="searchBarBox">
        <Search search={search} setSearch={setSearch}/>
    </div>
    <Grid comics={filteredComics}/>
  </div>
}

export default App;
