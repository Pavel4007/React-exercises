import React, {useState} from 'react';
import './App.css';
import List from './components/ListItems/List';
import NewItem from './components/NewItem/NewItem';

const dummyList = [
	{
		"id": "1",
		"title": "Bananas",
		"price": "3.49",
		"quantity": "1"
	},
	{
		"id": "2",
		"title": "Apples",
		"price": "1.79",
		"quantity": "2"
	},
	{
		"id": "3",
		"title": "Eggs",
		"price": "0.48",
		"quantity": "30"
	}
];

const App = () => {

	const [itemsList, setItems] = useState(dummyList);
  
	const addNewItemHandler = item => {
		setItems((prevItems) => {
			return [item, ...prevItems]
		})
	}

    const removeItemHandler = (idToRemove) => {
        setItems((prevItems) => prevItems.filter(item => item.id !== idToRemove));
    };

	return (
		<div className="App">
			<NewItem addItem={addNewItemHandler} />
			<List items={itemsList} removeItem={removeItemHandler} />
		</div>
	);
}

export default App;