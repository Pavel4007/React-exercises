import React, { useState } from "react";
import './List.css';
import ListItem from "./ListItem";

function List(props) {
    const [items, setItems] = useState(props.items);

    const removeItem = (idToRemove) => {
        console.log(items);
        const newItems = items.filter(item => item.id !== idToRemove);
        console.log(newItems);
        setItems(newItems);
    };

    return (
        <div className="list">
            <h2 className="list__title">Product List</h2>

            <ul>
                { items.map((item, index) => (
                    <ListItem 
                        key={item.id} 
                        item={item} 
                        removeItem={removeItem} 
                    />
                )) }
            </ul>
        </div>
    );
}

export default List;