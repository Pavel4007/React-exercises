import React from 'react';
import './App.css';
import List from './components/ListItems/List';
import NewItem from './components/NewItem/NewItem';

function App() {
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
	]

	function addNewItem(...itemProps) {
		
	}

	return (
		<div className="App">
			<NewItem addItem={addNewItem} />
			<List items={dummyList}/>
		</div>
	);
}

export default App;