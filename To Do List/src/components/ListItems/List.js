import React, { useState } from "react";
import './List.css';
import ListItem from "./ListItem";

function List(props) {
    const [items, setItems] = useState(props.items);

    const removeItem = (idToRemove) => {
        const newItems = items.filter(item => item.id !== idToRemove);
        setItems(newItems);
    };

    return (
        <div className="list">
            <h1 className="list__title">Product List</h1>
            
            { ! items.length ? (
                <h2 className="list__title-alt">Please add products!</h2>        
                ) : (
                    <ul>
                        { items.map(item => (
                            <ListItem 
                                key={item.id} 
                                item={item} 
                                removeItem={removeItem} 
                            />
                        )) }
                    </ul>
                )
            }
        </div>
    );
}

export default List;