import "./itemListContainer.css"

const ItemListContainer = ( greeting) => {



return (
    <div className="greeting">
        <h1>{ greeting.greeting }</h1>
    </div>
);
};

export default ItemListContainer;