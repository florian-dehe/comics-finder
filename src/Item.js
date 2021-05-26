import "./Item.css"

function Item({data}) {
    return ( <div className="comicItem">
        <div>
            <img src={data.image} alt="Comic item"/>
        </div>
        <div>
            <strong>Title:</strong> <span>{data.title} </span>
        </div>
        <div>
            <strong>Collection:</strong> <span>{data.collection}</span>
        </div> 
    </div>)
}

export default Item;
