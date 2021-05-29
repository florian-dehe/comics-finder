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

  useEffect(() => {
    fetch_conf()
        .then( x => x.comics_api_uri)
        .then( x => axios.get(x) )
        .then( res => {
                const comics = res.data.comics;
                setComics(comics);
        });
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
