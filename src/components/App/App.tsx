
import ItemsList from '../ItemsList/ItemsList';
import AddItemForm from '../forms/AddItemForm/AddItemForm';
import FilterForm from '../forms/FilterForm/FilterForm';
import Form from '../forms/AddItemForm/AddForm';

import './App.scss';
function App() {

  return (
	<div className="App">

		<div className="btns">
			<FilterForm />
			<AddItemForm />
			<Form />
		</div>

		<ItemsList />

	</div>
  );
}


export default App;
