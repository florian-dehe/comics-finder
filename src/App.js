import Search from "./Search";
import Grid from "./Grid";
import { useState } from "react";

import "./App.css"

function App() {
  const [search, setSearch] = useState('');

  const comics = [
    { id:'1', data:{title: "Superman", collection: "DC", image: "https://bdi.dlpdomain.com/album/9782365772563/couv/M385x862/all-star-superman-brd.jpg"} },
    { id:'2', data:{title: "Batman", collection: "DC", image: "https://bdi.dlpdomain.com/album/9782365776998/couv/M385x862/batman-tome-6.jpg"} },
    { id:'3', data:{title: "Nightwing", collection: "DC Rebirth", image: "https://bdi.dlpdomain.com/album/9791026811541/couv/M385x862/nightwing-rebirth-tome-1.jpg"} },
    { id:'4', data:{title: "Aquaman", collection: "DC Rebirth", image: "https://bdi.dlpdomain.com/album/9791026823438/couv/M385x862/arthur-curry-aquaman-tome-1.jpg"} }
  ]

  const filteredComics = search.length === 0 ? comics : 
        comics.filter( comic => comic.data.title.toLowerCase().includes(search.toLowerCase()) || comic.data.collection.toLowerCase().includes(search.toLowerCase()));

  return <div>
    <h3 className="title">COMICS FINDER</h3>
    <div className="searchBarBox">
        <Search search={search} setSearch={setSearch}/>
    </div>
    <Grid comics={filteredComics}/>
  </div>
}

export default App;
