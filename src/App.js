import Search from "./Search";
import Grid from "./Grid";
import { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";

import conf from './conf';

async function fetch_conf() {
    const settings = await conf;
    return settings;
}

function App() {
  const [comics, setComics] = useState([]);
  const [search, setSearch] = useState('');

  // Fetching conf and use the API address to make a GET request.
  useEffect(() => {
    fetch_conf()
        .then( x => x.comics_api_uri)
        .then( x => axios.get(x) )
        .then( res => {
                const comics = res.data.comics;
                setComics(comics);
        })
        .catch(function (err) {
          console.error(err);
        });
  }, []);

  // Filter the comics with the research bar
  const filteredComics = search.length === 0 ? comics :
            comics.filter(  comic => comic.title.toLowerCase().includes(search.toLowerCase())
                            ||  comic.collection.toLowerCase().includes(search.toLowerCase())
                            ||  comic.serie.toLowerCase().includes(search.toLowerCase())
                        );

  // The React rendered view.
  return <div>
    <h3 className="title">COMICS FINDER</h3>
    <div className="searchBarBox">
        <Search search={search} setSearch={setSearch}/>
    </div>
    <Grid comics={filteredComics}/>
  </div>
}

export default App;
