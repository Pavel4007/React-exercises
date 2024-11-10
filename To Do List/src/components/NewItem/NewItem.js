import React, { useState } from "react";
import './NewItem.css';


function NewItem(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);

    function handleClick() {

        props.addItem(
            {
                title: name,
                price: price,
                quantity: quantity
            }
        );

        setName('');
        setPrice(0);
        setQuantity(1);
    }

    return (
        <div className="new-item">
            <h2 className="new-item__title">Add your item:</h2>

            <div className="new-item__field">
                <label htmlFor="product">Product:</label>

                <input
                    id="product"
                    type="text"
                    name="product"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="new-item__field">
                <label htmlFor="quantity">Quantity:</label>

                <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                />
            </div>

            <div className="new-item__field">
                <label htmlFor="price">Price:</label>

                <input
                    id="price"
                    name="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                />
            </div>

            <button onClick={handleClick}>
                Add product
            </button>
        </div>
    );
}

export default NewItem;