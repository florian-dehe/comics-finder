import Item from "./Item"

import "./Grid.css"

function Grid({comics}) {
    return (
        <div className="grid">
            {comics.map(comic => (
                <Item data={comic.data}/>
            ))}
        </div>
    )
}


export default Grid;