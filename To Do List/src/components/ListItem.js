import React from "react";
import './ListItem.css';
import trashIcon from '../assets/icons/trash.svg';

function ListItem(props) {

    return (
        <li className="list-item">
            <button onClick={() => props.removeItem(props.item.id)} className="list-item__delete">
                <img    
                    src={trashIcon}
                    alt="trash icon"
                />
            </button>

            <strong className="list-item__title">
                {props.item.title}
            </strong>

            <span className="list-item__calc">
                {props.item.quantity} x {Number(props.item.price).toFixed(2)}
            </span>

            <span className="list-item__total">
                {(props.item.quantity * props.item.price).toFixed(2)} BGN
            </span>
        </li>
    )
}

export default ListItem;