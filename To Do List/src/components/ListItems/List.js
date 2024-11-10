import React from "react";
import './List.css';
import ListItem from "./ListItem";

const List = ({ items, removeItem }) => {

    return (
        <div className="list">
            <h1 className="list__title">Product List</h1>
            
            { ! items.length ? (
                <h2 className="list__title-alt">Please add products!</h2>        
                ) : (
                    <ul>
                        { items.map((item,index) => (
                            <ListItem 
                                key={index} 
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