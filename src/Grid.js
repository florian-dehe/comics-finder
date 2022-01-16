import Item from "./Item"

import "./Grid.css"

// The grid for the comics view.
function Grid({comics}) {
    if (comics.length === 0) {
        return <div>No data to display.</div>
    }

    return (
        <div className="grid">
            {comics.map(comic => (
                <Item key={comic.id} data={comic}/>
            ))}
        </div>
    )
}

export default Grid;
