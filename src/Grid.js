import Item from "./Item"

import "./Grid.css"

function Grid({comics}) {
    return (
        <div className="grid">
            {comics.map(comic => (
                <Item data={comic}/>
            ))}
        </div>
    )
}

export default Grid;