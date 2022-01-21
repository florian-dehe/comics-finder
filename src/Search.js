import TextField from '@mui/material/TextField';

// The search bar.
function Search({search, setSearch}) {
    return (
        <TextField  id="comics-search-bar" 
                    label="Search" 
                    variant="outlined"
                    value={search}
                    onChange={ e => setSearch(e.target.value) } />
    );
}

export default Search;