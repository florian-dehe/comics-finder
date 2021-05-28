import "./Item.css"

function Item({data}) {
    return ( <div className="comicItem">
        <div>
            <img src={data.cover} alt="Comic item"/>
        </div>
        <div>
            <span>{data.volume}.{data.title}</span>
        </div>
        <div>
            <span>{data.serie}</span>
        </div>
        <div>
            <strong>Collection:</strong> <span>{data.collection}</span>
        </div>
    </div>)
}

export default Item;
