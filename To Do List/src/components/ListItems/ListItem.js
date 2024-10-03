import React from "react";
import './ListItem.css';
import trashIcon from '../../assets/icons/trash.svg';

function ListItem({item, removeItem}) {

    return (
        <li className="list-item">
            <button onClick={() => removeItem(item.id)} className="list-item__delete">
                <img    
                    src={trashIcon}
                    alt="trash icon"
                />
            </button>

            <strong className="list-item__title">
                {item.title}
            </strong>

            <span className="list-item__calc">
                {item.quantity} x {Number(item.price).toFixed(2)}
            </span>

            <span className="list-item__total">
                {(item.quantity * item.price).toFixed(2)} BGN
            </span>
        </li>
    )
}

export default ListItem;