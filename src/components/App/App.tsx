import { FC } from 'react';

import ItemsList from '../ItemsList/ItemsList';
import AddItemForm from '../forms/AddItemForm/AddItemForm';
import ToggleFilterForm from '../forms/FilterForm/ToggleFilterForm';
import FilterForm from '../forms/FilterForm/FilterForm';
import Form from '../forms/AddItemForm/AddForm';

import './App.scss';
const App:FC = () => {

  return (
	<div className="App">

		<div className="btns">
			<ToggleFilterForm />
			<AddItemForm />
			<Form />
			<FilterForm />
		</div>

		<ItemsList />

	</div>
  );
}


export default App;
