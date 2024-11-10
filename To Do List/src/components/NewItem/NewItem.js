import React from "react";
import './NewItem.css';


function NewItem(props) {
// console.log(props);
    function handleClick() {
        const name = document.getElementById('product').value;
        const quantity = document.getElementById('quantity').value;
        const price = document.getElementById('price').value;

        props.addItem(name, quantity, price);
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
                />
            </div>

            <div className="new-item__field">
                <label htmlFor="quantity">Quantity:</label>

                <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    defaultValue="1"
                />
            </div>

            <div className="new-item__field">
                <label htmlFor="price">Price:</label>

                <input
                    id="price"
                    name="price"
                    type="number"
                    defaultValue="0.00"
                />
            </div>

            <button onClick={handleClick}>
                Add product
            </button>
        </div>
    );
}

export default NewItem;