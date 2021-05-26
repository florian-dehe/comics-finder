import "./Search.css"

function Search({search, setSearch}) {
    return (
            <input className="searchBar"
                type="text"
                placeholder="Search name or collection"
                value={search}
                onChange={ e => setSearch(e.target.value) }
                />
    )
}

export default Search;