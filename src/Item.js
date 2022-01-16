import "./Item.css"

// The comic item to show.
function Item({data}) {
    return ( <div className="comicItem">
        <div>
            <img src={data.image_uri} alt="Comic item"/>
        </div>
        <div>
            <span>{data.volume}.{data.title}</span>
        </div>
        <div>
            <i>{data.series_name}</i>
        </div>
        <div>
            <strong>Collection:</strong> <span>{data.col_name}</span>
        </div>
    </div>)
}

export default Item;
